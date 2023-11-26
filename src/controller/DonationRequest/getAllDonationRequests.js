const DonationRequestModel = require('../../models/DonationRequest')

const getAllDonationRequests = async(req, res) => {
    try{
        const result = await DonationRequestModel.find()
        res.send(result)
    } catch(error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = getAllDonationRequests