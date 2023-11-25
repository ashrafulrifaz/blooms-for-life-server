const DonationRequestModel = require('../../models/DonationRequest')

const createDonationRequest = async(req, res) => {
    try{
        const body = req.body
        const result = await DonationRequestModel(body).save()
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = createDonationRequest