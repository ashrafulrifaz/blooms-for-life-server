const mongoose = require('mongoose')
require("dotenv").config();

const connectDB = async () => {
    const uri = process.env.MONGODB_URI
    await mongoose.connect(uri, {dbName: process.env.MONGODB_DBNAME})
    console.log('connected to database');
}

module.exports = connectDB