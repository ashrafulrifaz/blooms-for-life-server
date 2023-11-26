const { Schema, default: mongoose } = require("mongoose");

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },    
    thumbnail_image: {
        type: String,
        required: true
    },    
    content: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

const BlogModel = mongoose.model("Blog", BlogSchema)
module.exports = BlogModel