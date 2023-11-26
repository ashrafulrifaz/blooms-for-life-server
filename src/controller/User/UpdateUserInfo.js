const UserModel = require('../../models/User')

const updateUserInfo = async(req, res) => {
    try{
        const id = req.params.id
        const user = req.body;
        const result = await UserModel.findByIdAndUpdate(
            {_id: id},
            {
                $set:{
                    name: user.name,
                    blood_group: user.blood_group,
                    district: user.district,
                    upazila: user.upazila,
                    image: user.image,
                    status: user.status,
                    role: user.role
                }
            },
            {new: true}
        )
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = updateUserInfo