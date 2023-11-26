const express = require("express");
const verifyToken = require('../../middlewares/verifyToken')
const addBlog = require('../../controller/Blog/addBlog')
const getAllBlog = require('../../controller/Blog/getAllBlog')
const blogRoute = express.Router()

blogRoute.post('/blogs', verifyToken, addBlog)

blogRoute.get('/blogs', verifyToken, getAllBlog)

module.exports = blogRoute