const express = require("express");
const findUpazilas = require('../../controller/Upazilas/upazilas')
const upazilasRoute = express.Router()

upazilasRoute.get('/upazilas', findUpazilas)

module.exports = upazilasRoute