const DonationRequestModel = require('../../models/DonationRequest')

const deleteDonationRequest = async(req, res) => {
    try{
        const id = req.params.id
        const result = await DonationRequestModel.findByIdAndDelete({_id: id})
        res.send(result)
    } catch(error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = deleteDonationRequest