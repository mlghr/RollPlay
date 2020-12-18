const Router = require("express").Router;
const User = require("../models/user");

const router = new Router();


/** get list of users.
 *
 * => {users: [{username, first_name, last_name}, ...]}
 *
 **/
router.get("/", async (req, res, next) => {
  try {
    let users = await User.all();
    return res.json({users});
  } 
  catch (err) {
    return next(err);
  }
});

/** get detail of users.
 *
 * => {user: {username, first_name, last_name}}
 *
 **/

router.get("/match", async (req, res, next) => {
  try {
    let user = await User.getRandom();
    return res.json({user});
  }
  catch (err) {
    return next(err);
  }
});

module.exports = router;