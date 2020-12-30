const db = require("../db");
const ExpressError = require("../expressError");

/**stores users that have "matched" with eachother */

class Evaluation {

  /**Lists all matches */
  static async all(){
    const result = await db.query(`SELECT * FROM evaluations`)

    if(!result){
      throw new ExpressError("There are no evaluations", 404)
    }
    return result.rows[0];
  }

  static async get(id){
    const result = await db.query(
      `SELECT id 
      FROM evaluations;`)
  }

  static async create(user_evaluating, user_evaluated, evaluation){
    const result = await db.query(
      `INSERT INTO evaluations (
        user_evaluating,
        user_evaluated,
        evaluation
      )
      VALUES ($1, $2, $3)
      RETURNING evaluation`,
      [user_evaluating, user_evaluated, evaluation]
    )

    return result.rows[0];
  }      

  static async match(user_evaluating, user_evaluated){
    const result = await db.query(
      `SELECT evaluations.user_evaluating 
        FROM evaluations
          INNER JOIN evaluations as OtherEvaluations
              ON evaluations.user_evaluating = OtherEvaluations.user_evaluated
                  AND OtherEvaluations.evaluation = 'accepted'
      WHERE evaluations.user_evaluating = user_evaluated and evaluations.evaluation = 'accepted'`
    )

    return result.rows[0];
  }
}

module.exports = Evaluation;