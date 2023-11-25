const express = require("express");
const newUser = require('../../controller/User/NewUser')
const findSingleUser = require('../../controller/User/findSingleUser')
const updateUserInfo = require('../../controller/User/UpdateUserInfo')
const verifyToken = require('../../middlewares/verifyToken')
const userRoute = express.Router()

userRoute.post('/users', newUser)

userRoute.get('/users/:email', verifyToken, findSingleUser)

userRoute.put('/users/:id', verifyToken, updateUserInfo)

module.exports = userRoute