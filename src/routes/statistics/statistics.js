const express = require("express");
const verifyToken = require('../../middlewares/verifyToken')
const statistics = require('../../controller/Statistics/statistics')
const statsRoute = express.Router()

statsRoute.get('/statistics', verifyToken, statistics)

module.exports = statsRoute