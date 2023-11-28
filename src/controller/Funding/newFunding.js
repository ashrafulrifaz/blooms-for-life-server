const FundingModel = require('../../models/Funding')

const newFunding = async (req, res) => {
    try{
        const info = req.body
        const result = await FundingModel(info).save()
        res.send(result)
    } catch(error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = newFunding