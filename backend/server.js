const express = require("express")

const router = express.Router()

router.use('/',express.static('./Projects/Calculator-App/src'))

module.exports = router;