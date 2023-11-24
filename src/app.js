const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddlewares");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express()
const port = process.env.PORT || 5000

applyMiddlewares(app)



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const connectDB = require("./db/connectDB");

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);


app.get('/health', (req, res) => {
    res.send('blood is running');
})

app.all("*", (req, res, next) => {
    const error = new Error(`the requested url ${req.url} is not found`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
})

const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`blood server running on ${port}`);
    })
}

main()