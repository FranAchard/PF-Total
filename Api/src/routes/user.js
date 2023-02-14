let express = require("express");
let router = express.Router();
let simpleResponse = require("../middleware/simpleresponse");
let {createUser, confirm} = require("../Controllers/postUser.js")
let getUser = require("../Controllers/getUser.js")

router.get("/:id", getUser);
router.post("/signup", createUser);
router.patch("/", simpleResponse);
router.post("/confirm/*", confirm)

module.exports = router;