const UserModel = require('../../models/User');

const searchDonor = async(req, res) => {
    try{
        const {email, blood_group, district, upazila} = req.query
        const result = await UserModel.find({
            $or: [
                {
                    email: {
                        $regex: email
                    },
                    blood_group: {
                        $regex: blood_group
                    },
                    district: {
                        $regex: district
                    },
                    upazila: {
                        $regex: upazila
                    }
                }
            ]
        })
        if(result){
            res.send(result)
        } else {
            res.status(201).send({message: error.message})  
        }
    } catch(error) {
        res.status(201).send({message: error.message})        
    }
}

module.exports = searchDonor

// {
//     email: email,
//     blood_group: blood_group, 
//     district: district,
//     upazila: upazila
// }