const BlogModel = require('../../models/Blog')

const getAllBlog = async(req, res) => {
    try{
        const result = await BlogModel.find()
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = getAllBlog