let express = require("express");
let router = express.Router();
let product= require('./product')
let user =require('./user')
let payment = require('./payment')
let comment = require('./comment')


router.use('/product', product)
router.use('/user', user)
router.use('/payment', payment)
router.use('/comment', comment)

module.exports = router;