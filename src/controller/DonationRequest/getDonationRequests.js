const DonationRequestModel = require('../../models/DonationRequest')

const getDonationRequests = async(req, res) => {
    try{
        const email = req.params.email
        console.log(email);
        const result = await DonationRequestModel.find({requester_email: email})
        res.send(result)
    } catch(error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = getDonationRequests