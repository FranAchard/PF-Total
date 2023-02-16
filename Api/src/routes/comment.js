let express = require("express");
let router = express.Router();
const postComment = require('../Controllers/postComment');
const getComments = require('../Controllers/getComments')


router.post('/', postComment);
router.get('/', getComments)

module.exports = router;