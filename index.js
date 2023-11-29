const express = require("express");
const cookieParser = require('cookie-parser')
const applyMiddlewares = require("./src/middlewares/applyMiddlewares");
const connectDB = require("./src/db/connectDB");
require("dotenv").config();
const app = express()
const port = process.env.PORT || 5000
app.use(cookieParser());

const authenticationRoute = require('./src/routes/authentication/index')
const userRoute = require('./src/routes/User/User')
const districtsRoute = require('./src/routes/districts/districtrs')
const upazilasRoute = require('./src/routes/Upazilas/upazilas')
const requestRoute = require('./src/routes/donationRequest/donationRequest');
const statsRoute = require("./src/routes/statistics/statistics");
const blogRoute = require("./src/routes/blog/blog");
const fundingRoute = require("./src/routes/Funding/funding");
const paymentRoute = require("./src/routes/paymentIntent/paymentIntent");

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

const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`blood server running on ${port}`);
    })
}

main()