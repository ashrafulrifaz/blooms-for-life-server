const express = require("express");
const paymentIntent = require('../../controller/PaymentIntent/paymentIntent')
const verifyToken = require('../../middlewares/verifyToken')
const paymentRoute = express.Router()

paymentRoute.post('/create-payment-intent', verifyToken, paymentIntent)

module.exports = paymentRoute