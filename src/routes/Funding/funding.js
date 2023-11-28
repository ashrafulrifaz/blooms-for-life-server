const express = require("express");
const newFunding = require('../../controller/Funding/newFunding')
const getAllFundings = require('../../controller/Funding/getAllFundings')
const verifyToken = require('../../middlewares/verifyToken')
const fundingRoute = express.Router()

fundingRoute.post('/funding', verifyToken, newFunding)

fundingRoute.get('/funding', verifyToken, getAllFundings)

module.exports = fundingRoute