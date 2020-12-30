/** Express app for Roll Play */

const express = require("express");
const cors = require("cors");
const { authenticateJWT } = require("./middleware/auth");

const ExpressError = require("./expressError")
const app = express();

// allow both form-encoded and json body parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// allow connections to all routes from any browser
app.use(cors());

// get auth token for all routes
app.use(authenticateJWT);

/** routes */

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const characterRoutes = require("./routes/characters");
const evaluationRoutes = require("./routes/evaluations";)

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/characters", characterRoutes);
app.use("/evaluations", evaluationRoutes);

app.use(express.static('static/'));

/** Handle websocket chat */

// allow for app.ws routes for websocket routes
const wsExpress = require('express-ws')(app);

const ChatUser = require('./ChatUser');

/** Handle a persistent connection to /chat/[roomName]
 *
 * Note that this is only called *once* per client --- not every time
 * a particular websocket chat is sent.
 *
 * `ws` becomes the socket for the client; it is specific to that visitor.
 * The `ws.send` method is how we'll send messages back to that socket.
 */

app.ws('/chat/:roomName', function(ws, req, next) {
  try {
    const user = new ChatUser(
      ws.send.bind(ws), // fn to call to message this user
      req.params.roomName // name of room for user
    );

    // register handlers for message-received, connection-closed

    ws.on('message', function(data) {
      try {
        user.handleMessage(data);
      } catch (err) {
        console.error(err);
      }
    });

    ws.on('close', function() {
      try {
        user.handleClose();
      } catch (err) {
        console.error(err);
      }
    });
  } catch (err) {
    console.error(err);
  }
});

/** serve homepage --- just static HTML
 *
 * Allow any roomName to come after homepage --- client JS will find the
 * roomname in the URL.
 *
 * */

app.get('/:roomName', function(req, res, next) {
  res.sendFile(`${__dirname}/chat.html`);
});

/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   if (process.env.NODE_ENV != "test") console.error(err.stack);
//   return res.json({
//     error: err,
//     message: err.message
//   });
// });

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});


module.exports = app;
