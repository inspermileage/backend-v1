const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = 3333;
const HOST = "0.0.0.0";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://martimfj:martimfjsenha@cluster0-uwgn5.mongodb.net/insper-mileage?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.use(require("./routes"));

app.listen(PORT, HOST);