const UpazilasModel = require('../../models/Upazilas')

const findUpazilas = async (req, res) => {
    try{
        const result = await UpazilasModel.find()
        res.send(result)
    } catch(error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = findUpazilas