const express = require("express");
const { createCookieToken } = require("../../api/authentication/controller");
const router = express.Router()

router.post('/jwt', createCookieToken)

module.exports = router