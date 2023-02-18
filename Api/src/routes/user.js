let express = require("express");
let router = express.Router();
let simpleResponse = require("../middleware/simpleresponse");
let {createUser, confirm} = require("../Controllers/postUser.js")
let getUser = require("../Controllers/getUser.js");
const getUserByEmail = require("../Controllers/getUserByEmail");
const hideUser = require('../Controllers/hideUser')
const restoreUser = require('../Controllers/restoreUser')

router.get("/:id", getUser);
router.get("/email/:email", getUserByEmail)
router.post("/signup", createUser);
router.put('/hide', hideUser)
router.put('/restore', restoreUser)
router.patch("/", simpleResponse);
router.post("/confirm/*", confirm)

module.exports = router;