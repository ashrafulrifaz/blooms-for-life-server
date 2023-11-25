const express = require("express");
const createDonationRequest = require('../../controller/DonationRequest/createDonationRequests')
const getDonationRequests = require('../../controller/DonationRequest/getDonationRequests')
const verifyToken = require('../../middlewares/verifyToken')
const requestRoute = express.Router()

requestRoute.post('/donation-requests', verifyToken, createDonationRequest)

requestRoute.get('/donation-requests/:email', verifyToken, getDonationRequests)

module.exports = requestRoute