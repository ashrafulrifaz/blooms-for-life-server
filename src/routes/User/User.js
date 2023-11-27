const express = require("express");
const newUser = require('../../controller/User/NewUser')
const searchDonor = require('../../controller/User/searchDonor')
const findSingleUser = require('../../controller/User/findSingleUser')
const findAllUser = require('../../controller/User/findAllUser')
const updateUserInfo = require('../../controller/User/UpdateUserInfo')
const verifyToken = require('../../middlewares/verifyToken')
const userRoute = express.Router()

userRoute.post('/users', newUser)

userRoute.get('/users/search', searchDonor)

userRoute.get('/users/:email', verifyToken, findSingleUser)

userRoute.get('/users', verifyToken, findAllUser)

userRoute.put('/users/:id', verifyToken, updateUserInfo)

module.exports = userRoute