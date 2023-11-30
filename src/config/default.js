require("dotenv").config();

const config = {
    LOCAL_CLIENT: process.env.LOCAL_CLIENT,
    LIVE_CLIENT1: process.env.CLIENT1,
    LIVE_CLIENT2: process.env.CLIENT2,
}

module.exports = config