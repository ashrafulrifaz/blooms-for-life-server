const express = require("express");
const newFunding = require('../../controller/Funding/newFunding')
const getAllFundings = require('../../controller/Funding/getAllFundings')
const verifyToken = require('../../middlewares/verifyToken');
const fundingCount = require("../../controller/Funding/fundingCount");
const fundingRoute = express.Router()

fundingRoute.post('/funding', verifyToken, newFunding)

fundingRoute.get('/funding', verifyToken, getAllFundings)

fundingRoute.get('/funding/:donation_id', fundingCount)

module.exports = fundingRoute