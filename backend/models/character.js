const db = require("../db");
const ExpressError = require("../expressError");

/** Playable characters that users create */

class Character {

    static async create({name, age, c_class, race, background, details}){
        const result =  await db.query(
            `INSERT INTO characters (
                name,
                age,
                c_class,
                race,
                background,
                details)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING name, age, c_class, race, background`,
            [name, age, c_class, race, background, details]);

        return result.rows[0];
    }

    /** all: get all characters*/
    static async all(){
        const results = await db.query(
            `SELECT name,
                    age,
                    c_class,
                    race,
                    background,
                    details
            FROM characters
            ORDER BY name`);

        return results.rows;
    }

      /** Get: get character by name
   *
   * returns {name,
   *          age,
   *          class,
   *          race,
   *          background,
   *          details} */
    static async get(name){
        const results = await db.query(
            `SELECT name,
                    age,
                    c_class,
                    race,
                    background,
                    details
            FROM characters
            WHERE name = $1`,
            [name]);

        if(!results.rows[0]){
            throw new ExpressError(`Character: ${name} not found`, 404);
        }
        return results.rows[0];
    }

    /** Edit character details based on name */
    static async edit(name) {
        const result = await db.query(
            `UPDATE characters 
            SET name=$1, age=$2, c_class =$3, race=$4, background=$5, details=$6
            WHERE name=$7
            RETURNING name, age, c_class, race`,
            [name, age, c_class, race, background, details, name]);
        return result.rows[0];
    }

    /** Delete character based on name */
    static async delete(name) {
        const result = await db.query(
            `DELETE FROM characters
            WHERE name = $1
            RETURNING name`,
            [name]);

        return result.rows[0];
    }
}

module.exports = Character;