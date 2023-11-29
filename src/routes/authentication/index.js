const express = require("express");
const { createCookieToken, logout } = require("../../api/authentication/controller");
const router = express.Router()

router.post('/jwt', createCookieToken)

router.post('/logout', logout)

module.exports = router