const UserModel = require('../../models/User')

const findSingleUser = async(req, res) => {
    try{
        const email = req.params.email
        const result = await UserModel.findOne({email: email})
        res.send(result)
    } catch(error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = findSingleUser