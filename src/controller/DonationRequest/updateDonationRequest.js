const DonationRequestModel = require('../../models/DonationRequest')

const updateDonationRequest = async (req, res) => {
    try{
        const id = req.params.id;
        const request = req.body
        const result = await DonationRequestModel.findByIdAndUpdate({_id: id}, {
            $set: {
                requester_name: request.requester_name,
                requester_email: request.requester_email,
                recipient_name: request.recipient_name,
                recipient_district: request.recipient_district,
                recipient_upazila: request.recipient_upazila,
                hospital: request.hospital,
                full_address: request.full_address,
                date: request.date,
                time: request.time,
                details: request.details,
                status: request.status
            }
        }, {new: true})
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = updateDonationRequest