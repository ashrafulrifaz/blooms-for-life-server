const { Schema, default: mongoose } = require("mongoose");

const DistrictsSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const DistrictsModel = mongoose.model('Districts', DistrictsSchema)

module.exports = DistrictsModel