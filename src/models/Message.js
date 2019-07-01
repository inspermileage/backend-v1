const mongoose = require("mongoose");

const Message = new mongoose.Schema({
    type: String,
    text: String,
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Message", Message);