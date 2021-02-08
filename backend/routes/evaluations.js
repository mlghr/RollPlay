const Router = require("express").Router;
const Evaluation = require("../models/evaluation");

const router = new Router();



/** Once a user has made a decsion, the evaluation is stored */

router.post("/create", async(req, res, next) => {
  try {
    const { evaluatingUserID, evaluatedUserID, evalDecision } = req.body;
    let newEval = await Evaluation.create(evaluatingUserID, evaluatedUserID, evalDecision);
    return res.json({newEval});
  }
  catch(err) {
    return next(err);
  }
});

/** get list of evaluations.
 *
 * => {evaluations: [{evaluating_user_id, evaluated_user_id}, ...]}
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
 * => {evaluation: {evaluating_user_id, evaluated_user_id, evaluation}}
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
  * evaluated on both sides (both evaluating_user_id 
  * and evaluated_user_id have made a decision 
  **/

router.get("/matches/:username", async(req, res, next) => {
  try{
    let evaluations = await Evaluation.getMatches(req.params.username);
    return res.json({evaluations});
  } catch(err){
    return next(err);
  }
})

module.exports = router;