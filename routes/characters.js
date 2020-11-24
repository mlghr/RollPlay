const Router = require("express").Router;
const Character = require("../models/character")
const {ensureLoggedIn, ensureCorrectUser} = require("../middleware/auth");

const router = new Router();

/** get list of characters.
 *
 * => {characters: [{name, age, class, race}, ...]}
 *
 **/

router.get("/username/characters", async function (req, res, next) {
    const characters = Character.all();
    return res.json({characters});
})

router.post("/username/characters/new", async function (req, res, next) {
    let character = await Character.create(req.body);
    return res.json({character});
})

router.put("/username/characters/edit", async function (req, res, next) {
    let character = await Character.edit(req.body);
    return res.json({character});
})
