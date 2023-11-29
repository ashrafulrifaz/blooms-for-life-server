const express = require("express");
const verifyToken = require('../../middlewares/verifyToken')
const verifyAdmin = require('../../middlewares/verifyAdmin')
const verifyAdminOrVolunteer = require('../../middlewares/verifyAdminOrVolunteer')
const addBlog = require('../../controller/Blog/addBlog')
const getAllBlog = require('../../controller/Blog/getAllBlog')
const getPublishedBlog = require('../../controller/Blog/getPublishedBlog')
const updateBlog = require('../../controller/Blog/updateBlog')
const deleteBlog = require('../../controller/Blog/deleteBlog')
const blogRoute = express.Router()

blogRoute.post('/blogs', verifyToken, verifyAdminOrVolunteer, addBlog)

blogRoute.get('/blogs', verifyToken, verifyAdminOrVolunteer, getAllBlog)

blogRoute.get('/blogs/published', getPublishedBlog)

blogRoute.put('/blogs/:id', verifyToken, verifyAdminOrVolunteer, updateBlog)

blogRoute.delete('/blogs/:id', verifyToken, verifyAdmin, deleteBlog)

module.exports = blogRoute