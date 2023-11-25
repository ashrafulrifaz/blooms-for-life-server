const DistrictsModel = require('../../models/Districts')

const findDistricts = async (req, res) => {
    try{
        const result = await DistrictsModel.find()
        res.send(result)
    } catch(error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = findDistricts