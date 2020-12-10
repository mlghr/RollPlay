const db = require("../db");
const ExpressError = require("../expressError");

/** Playable characters that users create */

class Character {

    static async create({c_name, age, c_class, race, background, details}){
        const result =  await db.query(
            `INSERT INTO characters (
                c_name,
                age,
                c_class,
                race,
                background,
                details)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING c_name, age, c_class, race, background`,
            [c_name, age, c_class, race, background, details]);

        return result.rows[0];
    }

    /** all: get all characters*/
    static async all(){
        const results = await db.query(
            `SELECT c_name,
                    age,
                    c_class,
                    race,
                    background,
                    details
            FROM characters
            ORDER BY c_name`);

        return results.rows;
    }

      /** Get: get character by name
   *
   * returns {c_name,
   *          age,
   *          class,
   *          race,
   *          background,
   *          details} */
    static async get(name){
        const results = await db.query(
            `SELECT c_name,
                    age,
                    c_class,
                    race,
                    background,
                    details
            FROM characters
            WHERE c_name = $1`,
            [name]);

        if(!results.rows[0]){
            throw new ExpressError(`Character: ${c_name} not found`, 404);
        }
        return results.rows[0];
    }

    /** Edit character details based on name */
    static async edit(name) {
        const result = await db.query(
            `UPDATE characters 
            SET c_name=$1, age=$2, c_class =$3, race=$4, background=$5, details=$6
            WHERE c_name=$7
            RETURNING c_name, age, c_class, race`,
            [c_name, age, c_class, race, background, details, name]);
        return result.rows[0];
    }

    /** Delete character based on name */
    static async delete(name) {
        const result = await db.query(
            `DELETE FROM characters
            WHERE c_name = $1
            RETURNING c_name`,
            [name]);

        return result.rows[0];
    }
}

module.exports = Character;