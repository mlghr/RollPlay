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

  /** Get user based on ID */

  static async get(id){
    const result = await db.query(
      `SELECT id 
              user_evaluating,
              user_evaluated,
              evaluation
      FROM evaluations
      WHERE id = $1`,
      [id]);

    return result.rows[0];
  }

  /**
   * 
   * @param {*} user_evaluating | current user
   * @param {*} user_evaluated | potential match viewed
   * @param {*} evaluation | result of interaction
   * 
   */

  static async create(user_evaluating, user_evaluated, evaluation){
    const result = await db.query(
      `INSERT INTO evaluations (
        user_evaluating,
        user_evaluated,
        evaluation)
      VALUES ($1, $2, $3)
      RETURNING evaluation`,
      [user_evaluating, user_evaluated, evaluation]
    )

    return result.rows[0];
  }      

  /**
   * 
   * @param user_evaluating --> Current logged in user who is evaluating (matching with) others.
   * 
   * @returns {Object} --> All users who the current user has matched.
   * 
   */

  static async getMatches(user_evaluating){
    const result = await db.query(
      `SELECT DISTINCT evaluations.${user_evaluating}, evaluations.user_evaluated, evaluations.evaluation
        FROM evaluations
          INNER JOIN evaluations as OtherEvaluations
              ON evaluations.${user_evaluating} = OtherEvaluations.user_evaluated
                  AND OtherEvaluations.evaluation = 'accepted'
      WHERE evaluations.${user_evaluating} = OtherEvaluations.user_evaluated AND evaluations.evaluation = 'accepted'`
    )

    return result.rows[0];
  }
}

module.exports = Evaluation;