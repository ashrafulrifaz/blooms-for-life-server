const express = require("express");
const verifyToken = require('../../middlewares/verifyToken')
const addBlog = require('../../controller/Blog/addBlog')
const getAllBlog = require('../../controller/Blog/getAllBlog')
const updateBlog = require('../../controller/Blog/updateBlog')
const deleteBlog = require('../../controller/Blog/deleteBlog')
const blogRoute = express.Router()

blogRoute.post('/blogs', verifyToken, addBlog)

blogRoute.get('/blogs', verifyToken, getAllBlog)

blogRoute.put('/blogs/:id', verifyToken, updateBlog)

blogRoute.delete('/blogs/:id', verifyToken, deleteBlog)

module.exports = blogRoute