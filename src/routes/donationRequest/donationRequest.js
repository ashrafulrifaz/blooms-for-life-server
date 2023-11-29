const express = require("express");
const createDonationRequest = require('../../controller/DonationRequest/createDonationRequests')
const getDonationRequests = require('../../controller/DonationRequest/getDonationRequests')
const getAllDonationRequests = require('../../controller/DonationRequest/getAllDonationRequests')
const getPendingDonation = require('../../controller/DonationRequest/getPendingDonation')
const updateDonationRequest = require('../../controller/DonationRequest/updateDonationRequest')
const deleteDonationRequest = require('../../controller/DonationRequest/deleteDonationRequest')
const verifyToken = require('../../middlewares/verifyToken')
const verifyAdminOrVolunteer = require('../../middlewares/verifyAdminOrVolunteer')
const requestRoute = express.Router()

requestRoute.post('/donation-requests', verifyToken, createDonationRequest)

requestRoute.get('/donation-requests/pending', getPendingDonation)

requestRoute.get('/donation-requests/:email', verifyToken, getDonationRequests)

requestRoute.get('/donation-requests', verifyToken, verifyAdminOrVolunteer, getAllDonationRequests)

requestRoute.put('/donation-requests/:id', verifyToken, updateDonationRequest)

requestRoute.delete('/donation-requests/:id', verifyToken, deleteDonationRequest)

module.exports = requestRoute