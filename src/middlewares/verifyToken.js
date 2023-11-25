require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next) => {
    const token = req?.cookies?.token
    console.log(req.cookies.token);
    if(!token){
      return res.status(401).send({message: 'unothorized access'})
    } 
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if(err) {
        return res.status(401).send({message: 'unothorized access'})
      } 
      req.user = decoded
      next()
    })
}

module.exports = verifyToken