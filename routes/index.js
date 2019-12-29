const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const models = require('../models')

router.get('/', function (req, res, next) {
  res.status(400)
  next(null, req, res, next)
})

router.get('/api/v1/rewards/:account', bodyParser.json(), models.getRewards)


module.exports = router
