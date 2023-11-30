const express = require("express");
const newFunding = require('../../controller/Funding/newFunding')
const getAllFundings = require('../../controller/Funding/getAllFundings')
const verifyToken = require('../../middlewares/verifyToken');
const fundingCount = require("../../controller/Funding/fundingCount");
const totalFundingCount = require("../../controller/Funding/totalFundingCount");
const verifyAdminOrVolunteer = require("../../middlewares/verifyAdminOrVolunteer");
const fundingRoute = express.Router()

fundingRoute.post('/funding', verifyToken, newFunding)

fundingRoute.get('/funding', verifyToken, getAllFundings)

fundingRoute.get('/funding/:donation_id', verifyToken, fundingCount)

fundingRoute.get('/total-funding', verifyToken, verifyAdminOrVolunteer, totalFundingCount)

module.exports = fundingRoute