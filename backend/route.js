const express = require('express')
const router = express.Router()
const findPaths = require('./controller')


router.post('/paths',findPaths)

module.exports = router