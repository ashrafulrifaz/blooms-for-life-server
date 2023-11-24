const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    blood_group: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    upazila: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel