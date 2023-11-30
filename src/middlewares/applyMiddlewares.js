const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser')
const { LOCAL_CLIENT, LIVE_CLIENT1, LIVE_CLIENT2 } = require("../config/default");

const applyMiddlewares = (app) => {
    app.use(cors({
        origin: [
            LOCAL_CLIENT,
            LIVE_CLIENT1,
            LIVE_CLIENT2
        ],
        credentials: true
    }));
    app.use(express.json());
    app.use(cookieParser());
};

module.exports = applyMiddlewares;