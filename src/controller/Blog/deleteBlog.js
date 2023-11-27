const BlogModel = require('../../models/Blog')

const deleteBlog = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await BlogModel.findByIdAndDelete({_id: id})
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})        
    }
}

module.exports = deleteBlog