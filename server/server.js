const express = require("express");
const cors = require("cors");
const createRouter = require('./helpers/create_router.js');
const app = express();

app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
    .then(client => {
        const db = client.db("sharesApp");
        const sharesCollection = db.collection("portfolio");
        const sharesRouter = createRouter(sharesCollection)
        app.use("/api/portfolio", sharesRouter)
    })
    .catch(console.error);

app.listen(9000, function() {
    console.log(`Listening to port ${this.address().port}`);
})