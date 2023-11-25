const UserModel = require('../../models/User')

const newUser = async (req, res) => {
    try{
        const user = req.body
        const isUserHave = await UserModel.findOne({email: user.email})

        if(isUserHave){
            res.send({message: "user already exist"})
            return
        }
        const result = await UserModel(user).save()
        res.status(201).send({success: true})
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = newUser