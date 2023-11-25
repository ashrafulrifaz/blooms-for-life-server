const { Schema, default: mongoose } = require("mongoose");

const UpazilasSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    district_id:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const UpazilasModel = mongoose.model('Upazilas', UpazilasSchema)

module.exports = UpazilasModel