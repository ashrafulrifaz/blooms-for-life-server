const UserModel = require("../models/User");

const verifyAdminOrVolunteer = async (req, res, next) => {
  try{
    const email = req?.user?.email;
    const query = {email: email}
    const user = await UserModel.findOne(query)
    console.log(user);
    const isAdminOrVolunteer = user?.role === 'admin' || user?.role === 'volunteer'
    if(!isAdminOrVolunteer){
      return res.status(403).send({message: 'forbidden access'})
    }
    next()
  } catch(error) {
    return res.status(403).send({message: 'forbidden access'})
  }
}

module.exports = verifyAdminOrVolunteer