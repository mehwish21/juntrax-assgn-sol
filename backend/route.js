const express = require('express')
const router = express.Router()
const getPaths = require('./controller')


router.post('/paths',getPaths)

module.exports = router