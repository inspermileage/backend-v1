const express = require("express");

const routes = new express.Router();


const DatasetController = require("./controllers/DatasetController");
const DataController = require("./controllers/DataController");

routes.post("/dataset", DatasetController.store);
routes.get("/dataset/", DatasetController.list);
routes.post("/dataset/:id", DataController.store);
routes.get("/dataset/:id", DatasetController.show);


module.exports = routes;