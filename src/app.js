const express = require("express");
const cookieParser = require('cookie-parser')
const applyMiddlewares = require("./middlewares/applyMiddlewares");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express()
const port = process.env.PORT || 5000
app.use(cookieParser());

const authenticationRoute = require('./routes/authentication/index')
const userRoute = require('./routes/User/User')
const districtsRoute = require('./routes/districts/districtrs')
const upazilasRoute = require('./routes/Upazilas/upazilas')
const requestRoute = require('./routes/donationRequest/donationRequest');
const statsRoute = require("./routes/statistics/statistics");
const blogRoute = require("./routes/blog/blog");
const paymentRoute = require("./routes/paymentIntent/paymentIntent");
const fundingRoute = require("./routes/Funding/funding");

applyMiddlewares(app)

app.use(authenticationRoute)

app.use(districtsRoute)

app.use(upazilasRoute)

app.use(userRoute)

app.use(requestRoute)

app.use(statsRoute)

app.use(blogRoute)

app.use(fundingRoute)

app.use(paymentRoute)


app.get('/health', (req, res) => {
    res.send('blood is running');
})

app.all("*", (req, res, next) => {
    const error = new Error(`the requested url ${req.url} is not found`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
})

module.exports = app