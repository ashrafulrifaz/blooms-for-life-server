const DonationRequestModel = require('../../models/DonationRequest')

const getPendingDonation = async(req, res) => {
    try{
        const result = await DonationRequestModel.find({status: 'pending'})
        res.send(result)
    } catch(error) {
        res.status(201).send({message: error.message})        
    }
}

module.exports = getPendingDonation