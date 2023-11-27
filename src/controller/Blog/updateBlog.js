const BlogModel = require('../../models/Blog')

const updateBlog = async(req, res) => {
    try{
        const id = req.params.id;
        const blog = req.body
        const result = await BlogModel.findByIdAndUpdate({_id: id}, {
            $set: {
                title: blog.title,
                thumbnail_image: blog.thumbnail_image,
                content: blog.content, 
                status: blog.status
            }
        }, {new: true})
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = updateBlog