const db = require("../db");
const ExpressError = require("../expressError");

/**stores users that have "matched" with eachother */

class Evaluation {

  /**Lists all matches */
  static async all(){
    const result = await db.query(`SELECT * FROM evaluations`)

    if(!result.rows[0]){
      throw new ExpressError("There are no evaluations", 404)
    }
    return result.rows[0];
  }

  static async get(evaluating_user_id){
    const result = await db.query(
      `SELECT evaluating_user_id,
              evaluated_user_id,
              evaluation
      FROM evaluations
      WHERE evaluating_user_id = $1`,
      [evaluating_user_id]);

    return result.rows[0];
  }

  static async create(evaluating_user_id, evaluated_user_id, evaluation){
    const result = await db.query(
      `INSERT INTO evaluations (
        evaluating_user_id,
        evaluated_user_id,
        evaluation)
      VALUES ($1, $2, $3)
      RETURNING evaluating_user_id, evaluated_user_id, evaluation`,
      [evaluating_user_id, evaluated_user_id, evaluation]
    )

    return result.rows[0];
  }      

  static async getMatches(){
    const result = await db.query(
      `SELECT DISTINCT evaluations.evaluating_user_id, evaluations.evaluated_user_id, evaluations.evaluation
        FROM evaluations
        INNER JOIN evaluations as OtherEvaluations
            ON evaluations.evaluating_user_id = OtherEvaluations.evaluated_user_id
                AND OtherEvaluations.evaluation = 'accepted'
        WHERE evaluations.evaluating_user_id = otherEvaluations.evaluated_user_id and evaluations.evaluation = 'accepted'`
    )
    return result.rows[0];
  }
}

module.exports = Evaluation;