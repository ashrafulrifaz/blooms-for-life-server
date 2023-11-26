const express = require("express");
const createDonationRequest = require('../../controller/DonationRequest/createDonationRequests')
const getDonationRequests = require('../../controller/DonationRequest/getDonationRequests')
const updateDonationRequest = require('../../controller/DonationRequest/updateDonationRequest')
const deleteDonationRequest = require('../../controller/DonationRequest/deleteDonationRequest')
const verifyToken = require('../../middlewares/verifyToken')
const requestRoute = express.Router()

requestRoute.post('/donation-requests', verifyToken, createDonationRequest)

requestRoute.get('/donation-requests/:email', verifyToken, getDonationRequests)

requestRoute.put('/donation-requests/:id', verifyToken, updateDonationRequest)

requestRoute.delete('/donation-requests/:id', verifyToken, deleteDonationRequest)

module.exports = requestRoute