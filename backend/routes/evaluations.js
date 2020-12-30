const Router = require("express").Router;
const Evaluation = require("../models/evaluation");

const router = new Router();


/** get list of users.
 *
 * => {users: [{username, first_name, last_name}, ...]}
 *
 **/
router.get("/", async (req, res, next) => {
  try {
    let evaluations = await Evaluation.all();
    return res.json({evaluations});
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
    let evaluation = await Evaluation.get(req.params.id);
    return res.json({evaluation});
  }
  catch (err) {
    return next(err);
  }
});

router.post("/create", async(req, res, next) => {
  try {
    let evaluation = await Evaluation.create(req.body);
    return res.json({evaluation});
  }
  catch(err) {
    return next(err);
  }
});

module.exports = router;