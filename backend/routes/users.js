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

/** gets total number of users. Used for generating random person for matches.
 * Returns count object
*/

router.get("/count", async (req, res, next) => {
  try {
    let count = await User.count();
    return res.json({count}.count);
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

router.get("/:id", async (req, res, next) => {
  try {
    let user = await User.get(req.params.id);
    return res.json({user});
  }
  catch (err) {
    return next(err);
  }
});

module.exports = router;