const mongoose = require("mongoose")

const Data = new mongoose.Schema({
  button: Number,
  accelerometer: Number,
  altimeter: Number,
  barometer: Number,
  temperature: Number,
  rpm: Number,
  voltage: Number,
  current: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Data", Data)
