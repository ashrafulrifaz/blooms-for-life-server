const express = require("express");
const newUser = require('../../controller/User/NewUser')
const userRoute = express.Router()

userRoute.post('/users', newUser)

module.exports = userRoute