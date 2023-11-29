require('dotenv').config()
const http = require('http')
const app = require('./src/app')
const connectDB = require('./src/db/connectDB')
const server = http.createServer(app)
const port = process.env.PORT || 5000
const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`blood server running on ${port}`);
    })
}

main()