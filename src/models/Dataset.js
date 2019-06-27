const mongoose = require('mongoose');

const Dataset = new mongoose.Schema({
	title: {
		type: String,
		required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
	data: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Data"
	}]
}, {
	timestamps: true
})

module.exports = mongoose.model("Dataset", Dataset);