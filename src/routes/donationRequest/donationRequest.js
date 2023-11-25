const express = require("express");
const createDonationRequest = require('../../controller/DonationRequest/createDonationRequests')
const verifyToken = require('../../middlewares/verifyToken')
const requestRoute = express.Router()

requestRoute.post('/donation-requests', verifyToken, createDonationRequest)

module.exports = requestRoute