const Router = require("express").Router;
const Evaluation = require("../models/evaluation");

const router = new Router();


/** get list of evaluations.
 *
 * => {evaluations: [{user_evaluating, user_evaluated}, ...]}
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

/** get detail of evaluation.
 *
 * => {evaluation: {user_evaluating, user_evaluated, evaluation}}
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