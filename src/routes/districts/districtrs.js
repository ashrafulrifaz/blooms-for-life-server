const express = require("express");
const findDistricts = require('../../controller/Districts/findDistricts')
const districtsRoute = express.Router()

districtsRoute.get('/districts', findDistricts)

module.exports = districtsRoute