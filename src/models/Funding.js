const { Schema, default: mongoose } = require("mongoose");

const FundingSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    donation_id: {
        type: Number,
        required: true
    },
    donor_name: {
        type: String,
        required: true
    },
    donor_email: {
        type: String,
        required: true
    },
    donor_image: {
        type: String,
        required: true
    }
})

const FundingModel = mongoose.model('Funding', FundingSchema)

module.exports = FundingModel