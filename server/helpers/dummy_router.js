const express = require("express");
const ObjectId = require("mongodb").ObjectId;

const createDummyRouter = function (collections) {

    const Router = express.Router();

    Router.get("/:name", (request, response) => {
        const nameToSearch = request.params.name;
        collections
            .find()
            .toArray()
            .then(docs => {
                const filteredDoc = docs.filter( doc => {
                    return doc["Meta Data"]["2. Symbol"] == nameToSearch;
                })
                if(filteredDoc.length > 0) {
                    response.json(filteredDoc[0])
                } else return response.json("Share not found")
            })

            .catch((err) => {
                console.error(err);
                response.status(500);
                response.json({ status: 500, error: err });
            });
    })

    Router.post("/", (request, response) => {
        const newDataToAdd = request.body;
        collections
            .insertOne(newDataToAdd)
            .then( result => response.json(result))
            .catch(error => {
                console.error;
                response.status(500);
                response.json({status: 500, error: error});
            });
    })

    return Router;
}

module.exports = createDummyRouter;