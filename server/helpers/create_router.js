const express = require("express");
const ObjectId = require("mongodb").ObjectId;

const createRouter = function (collections) {

    const Router = express.Router();

    Router.get("/", (request, response) => {
        collections
            .find()
            .toArray()
            .then(docs => response.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
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

    Router.delete("/:id", (request,response) => {
        const id = request.params.id;
        collections
            .deleteOne({_id: ObjectId(id)})
            .then(result => response.json(result))
            .catch(error => {
                console.error;
                response.status(500);
                response.json({status: 500, error: error});
            });
    })

    Router.put("/:id", (request, response) => {
        const id = request.params.id;
        const newDataToUpdate = request.body;
        collections
            .updateOne(
                { _id: ObjectId(id)} ,
                { "$set": newDataToUpdate}
            )
            .then(result => result.json())
            .catch(error => {
                console.error;
                response.status(500);
                response.json({status: 500, error: error})
            });
    });

    return Router;
}

module.exports = createRouter;