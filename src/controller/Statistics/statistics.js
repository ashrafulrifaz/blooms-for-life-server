const UserModel = require('../../models/User')
const DonationRequestModel = require('../../models/DonationRequest')

const getStatisticsData = async (req, res) => {
    try{
        const totalUser = await UserModel.estimatedDocumentCount()
        const totalRequest = await DonationRequestModel.estimatedDocumentCount()
        res.send({totalUser, totalRequest})
    } catch(error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = getStatisticsData