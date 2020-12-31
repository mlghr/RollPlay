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
const evaluationRoutes = require("./routes/evaluations");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/characters", characterRoutes);
app.use("/evaluations", evaluationRoutes);

/** websocket  */

const webSocketServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

//spinning the http and websocket server...
const server = http.createServer();
server.listen(webSocketServerPort);
console.log(`Listening on port ${webSocketServerPort}`);

const wsServer = new webSocketServer({
  httpServer: server
})

const clients = {};

const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0.10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

wsServer.on('request', function(request){
  let userID = getUniqueID();
  console.log((new Date()) + 'received a new connection from origin' + request.origin + '.');

  //can rewrite this to accept only certain origins
  const connection = request.accept(null, request.origin);
  clients[userID] = connection;
  console.log(`connected: ${userID} in ${Object.getOwnPropertyNames(clients)}`);

  connection.on('message', function(message){
    if(message.type === 'utf8') {
      console.log('Received message: ', message.utf8Data);
    }

    //broadcast message to all clients
    for(key in clients) {
      clients[key].sendUTF(message.utf8Data);
      console.log(`sent message to: ${clients[key]}`);
    }
  })
});

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});


module.exports = app;
