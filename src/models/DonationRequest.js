const { Schema, default: mongoose } = require("mongoose");

const DonationRequestSchema = new Schema({
    requester_name: {
        type: String,
        required: true
    },
    requester_email: {
        type: String,
        required: true
    },
    recipient_name: {
        type: String,
        required: true
    },
    recipient_district: {
        type: String,
        required: true
    },
    recipient_upazila: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    full_address: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

const DonationRequestModel = mongoose.model("DonationRequest", DonationRequestSchema)
module.exports = DonationRequestModel