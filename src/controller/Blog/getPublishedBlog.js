const BlogModel = require('../../models/Blog')

const getPublishedBlog = async(req, res) => {
    try{
        const result = await BlogModel.find({status: 'published'})
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = getPublishedBlog