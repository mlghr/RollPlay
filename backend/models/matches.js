const db = require("../db");
const ExpressError = require("../expressError");

/**stores users that have "matched" with eachother */

class Match {

  /**Lists all matches */
  static async all(){
    const result = await db.query(`SELECT * FROM matches`)

    if(!result){
      throw new ExpressError("There are no matches", 404)
    }
    return result.rows[0];
  }

  static async get(id){
    const result = await db.query(
      `SELECT * 
      FROM matches m
      INNER JOIN users `)
//       SELECT *
// FROM matches m
// JOIN teams t1 ON m.team_A_id = t1.id
// JOIN teams t2 ON m.team_B_id = t2.id
  }

  static async make(u_id1, u_id2){
    const reult = await db.query(
      `INSERT INTO matches
      VALUES ($1, $2, $3, $4, $5)`
    )
  }
}

module.exports = Match;