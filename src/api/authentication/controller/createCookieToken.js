require("dotenv").config();
const jwt = require('jsonwebtoken')

const createCookieToken = async(req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn: '24h'})
    res
    .cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    })
    .send({result: true})
}

module.exports = createCookieToken