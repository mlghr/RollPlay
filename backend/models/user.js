/** User class */

const db = require("../db");
const bcrypt = require("bcrypt");
const ExpressError = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config");


/** User of the site. */

class User {

  /** register new user -- returns
   *    {username, password, first_name, last_name}
   */

  static async register({username, password, first_name, last_name, email, age, game_interests}) {
    let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const result = await db.query(
        `INSERT INTO users (
              username,
              password,
              first_name,
              last_name,
              email,
              age,
              game_interests
              )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING username, first_name, last_name`,
        [username, hashedPassword, first_name, last_name, email, age, game_interests]
    );
    return result.rows[0];
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) {
    const result = await db.query(
        "SELECT password FROM users WHERE username = $1",
        [username]);
    let user = result.rows[0];

    return user && await bcrypt.compare(password, user.password);
  }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) {
    const result = await db.query(
        `UPDATE users
           SET last_login_at = current_timestamp
           WHERE username = $1
           RETURNING username`,
        [username]);

    if (!result.rows[0]) {
      throw new ExpressError(`No such user: ${username}`, 404);
    }
  }

  /** All: basic info on all users:
   * [{username, first_name, last_name}, ...] */

  static async all() {
    const result = await db.query(
        `SELECT id,
                username,
                first_name,
                last_name,
                email,
                age,
                game_interests
            FROM users
            ORDER BY id`);

    return result.rows;
  }

 /** Get: random user */

  static async getRandom(){
    const result = await db.query(
      `SELECT id,
              username,
              first_name,
              last_name,
              email,
              age,
              game_interests
      FROM users
      ORDER BY RANDOM()
      LIMIT 1`);

    if (!result.rows[0]) {
      throw new ExpressError(`No such user: ${id}`, 404);
    }

    return result.rows[0];
  }

  /** Get: get user by id
   *
   * returns {id,
   *          username,
   *          first_name,
   *          last_name} */

  static async get(id) {
    const result = await db.query(
        `SELECT id,
                username,
                first_name,
                last_name
            FROM users
            WHERE id = $1`,
        [id]);

    if (!result.rows[0]) {
      throw new ExpressError(`No such user with id of ${id}`, 404);
    }

    return result.rows[0];
  }

}


module.exports = User;