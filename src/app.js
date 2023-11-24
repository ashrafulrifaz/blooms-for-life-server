const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddlewares");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express()
const port = process.env.PORT || 5000

const authenticationRoute = require('./routes/authentication/index')
const newUserRoute = require('./routes/User/User')

applyMiddlewares(app)

app.use(authenticationRoute)

app.use(newUserRoute)


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