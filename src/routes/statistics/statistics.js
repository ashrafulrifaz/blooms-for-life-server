const express = require("express");
const verifyToken = require('../../middlewares/verifyToken')
const verifyAdminOrVolunteer = require('../../middlewares/verifyAdminOrVolunteer')
const statistics = require('../../controller/Statistics/statistics')
const statsRoute = express.Router()

statsRoute.get('/statistics', verifyToken, verifyAdminOrVolunteer, statistics)

module.exports = statsRoute