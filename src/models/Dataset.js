const mongoose = require("mongoose")

const Dataset = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    data: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Data",
      },
    ],
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Dataset", Dataset)
