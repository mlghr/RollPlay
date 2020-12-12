const Router = require("express").Router;
const Character = require("../models/character")
const { ensureLoggedIn, ensureCorrectUser } = require("../middleware/auth");

const router = new Router();

/** get list of characters.
 *
 * => {characters: [{name, age, class, race}, ...]}
 *
 **/

router.get("/", async (req, res, next) => {
    try {
        const characters = await Character.all();
        return res.json({ characters });
    } catch (err) {
        return next(err);
    }
});

router.get("/:name", async (req, res, next) => {
    try {
        const character = await Character.get(req.params.name);
        return res.json({ character });
    } catch (err) {
        return next(err);
    }
});

router.post("/new", async (req, res, next) => {
    try {
        const character = await Character.create(req.body);
        return res.json({ character });
    } catch (err) {
        return next(err);
    }
});

router.put("/:name/edit", async (req, res, next) => {
    try {
        console.log(req.body.name)
        const character = await Character.edit(req.body.name);
        return res.json({ character });
    } catch (err) {
        return next(err);
    }
});

router.delete("/:name/delete", async (req, res, next) => {
    try {
        console.log(`Hello, I am ${req.params.name}`);
        const character = await Character.delete(req.params.name);
        return res.json({ character });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;