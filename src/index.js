const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://martimfj:martimfjsenha@cluster0-uwgn5.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.use(require("./routes"));

app.listen(3333);