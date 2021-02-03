const express = require("express");
const User = require("../models/user");

const router = express.Router();

/** Returns a random user from DB */

router.get("/random", async (req, res, next) => {
  try {
    let user = await User.getRandom();
    console.log(user);
    return res.json({user});
  }
  catch (err) {
    return next(err);
  }
});

module.exports = router;