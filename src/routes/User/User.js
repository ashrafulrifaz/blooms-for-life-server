const express = require("express");
const newUser = require('../../controller/User/NewUser')
const findSingleUser = require('../../controller/User/findSingleUser')
const userRoute = express.Router()

userRoute.post('/users', newUser)

userRoute.get('/users/:email', findSingleUser)

module.exports = userRoute