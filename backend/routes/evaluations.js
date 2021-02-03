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

router.get("/:username", async(req, res, next) => {
  try {
    let evaluation = await Evaluation.get(req.params.username);
    return res.json({evaluation});
  }
  catch (err) {
    return next(err);
  }
});

/** returns all interactions which have been 
  * evaluated on both sides (both user_evaluating 
  * and user_evaluated have made a decision 
  **/

router.get("/matches/:username", async(req, res, next) => {
  try{
    let evaluations = await Evaluation.getMatches(req.params.username);
    return res.json({evaluations});
  } catch(err){
    return next(err);
  }
})

/** Once a user has made a decsion, the evaluation is stored */

router.post("/create", async(req, res, next) => {
  try {
    const { user_evaluating, user_evaluated, evaluation } = req.body;
    console.log(user_evaluating);
    let evalRes = await Evaluation.create(user_evaluating, user_evaluated, evaluation);
    return res.json({evalRes});
  }
  catch(err) {
    return next(err);
  }
});

module.exports = router;