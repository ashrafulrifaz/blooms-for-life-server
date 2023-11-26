const UserModel = require('../../models/User')

const findAllUser = async (req, res) => {
    try{
        const result = await UserModel.find()
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})
    } 
}

module.exports = findAllUser