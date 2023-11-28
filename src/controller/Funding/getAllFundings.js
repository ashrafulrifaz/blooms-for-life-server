const FundingModel = require('../../models/Funding')

const getAllFunding = async (req, res) => {
    try{
        const result = await FundingModel.find()
        res.send(result)
    } catch(error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = getAllFunding