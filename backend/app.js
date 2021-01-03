/** Express app for Roll Play */

const express = require("express");
const cors = require("cors");
const { authenticateJWT } = require("./middleware/auth");

const app = express();

// allow both form-encoded and json body parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// allow connections to all routes from any browser
app.use(cors());

// get auth token for all routes
app.use(authenticateJWT);

app.use(router);

/** routes */

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const characterRoutes = require("./routes/characters");
const evaluationRoutes = require("./routes/evaluations");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/characters", characterRoutes);
app.use("/evaluations", evaluationRoutes);

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});


module.exports = app;
