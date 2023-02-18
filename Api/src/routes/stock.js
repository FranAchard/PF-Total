let express = require("express");
let router = express.Router() ;
const stockControl = require('../Controllers/stockControl')

router.get('/', stockControl)

module.exports = router;