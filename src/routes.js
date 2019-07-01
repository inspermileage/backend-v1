const express = require("express");

const routes = new express.Router();


const DatasetController = require("./controllers/DatasetController");
const DataController = require("./controllers/DataController");
const MessageController = require("./controllers/MessageController");

routes.post("/dataset", DatasetController.store);
routes.get("/dataset/", DatasetController.list);
routes.get("/dataset/:id", DatasetController.show);
routes.get("/download/:id", DatasetController.download);

routes.post("/data/:id", DataController.store);
routes.post("/message/:id", MessageController.store);
routes.get("/message/:id", MessageController.show);



module.exports = routes;