const BlogModel = require('../../models/Blog')

const addBlog = async(req, res) => {
    try{
        const blog = req.body;
        const result = await BlogModel(blog).save()
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = addBlog