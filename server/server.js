const express = require("express");
const cors = require("cors");
const createRouter = require('./helpers/create_router.js');
const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
    .then(client => {
        const db = client.db("sharesApp");

        const sharesCollection = db.collection("portfolio");
        const sharesRouter = createRouter(sharesCollection);
        app.use("/api/portfolio", sharesRouter);

        const dummySharesWeeklyCollection = db.collection("dummySharesWeekly");
        const dummySharesWeeklyRouter = createRouter(dummySharesWeeklyCollection);
        app.use("/api/dummyShares/", dummySharesWeeklyRouter)
    })
    .catch(console.error);



app.listen(9000, function() {
    console.log(`Listening to port ${this.address().port}`);
})