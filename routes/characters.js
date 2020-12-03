const Router = require("express").Router;
const Character = require("../models/character")
const {ensureLoggedIn, ensureCorrectUser} = require("../middleware/auth");

const router = new Router();

/** get list of characters.
 *
 * => {characters: [{name, age, class, race}, ...]}
 *
 **/

router.get("/characters", async function (req, res, next) {
    const characters = Character.all();
    return res.json({characters});
})

router.post("/character/new", async function (req, res, next) {
    let character = await Character.create(req.body);
    return res.json({character});
})

router.put("/:character/edit", async function (req, res, next) {
    let character = await Character.edit(req.body);
    return res.json({character});
})

router.delete("/:character/delete", async function (req, res, next) {
    let character = await Character.delete(req.body);
    return res.json({character});
})

module.exports = router;