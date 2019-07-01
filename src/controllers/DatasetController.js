const Dataset = require("../models/Dataset");
const path = require("path");
const fs = require("fs");

class DatasetController {
	async store(req, res) {
		const dataset = await Dataset.create({
			title: req.body.title
		});

		return res.status(200).json(dataset);
	}

	async list(req, res) {
		const dataset = await Dataset.find({}).select("title");
		return res.status(200).json(dataset);
	}

	async show(req, res) {
		const dataset = await Dataset.findById(req.params.id).populate({
			path: "data",
			options: {
				sort: {
					timestamp: -1
				}
			}
		});
		return res.status(200).json(dataset);
	}

	async download(req, res) {
		var populateQuery = [{path:"data", options: {sort: {timestamp: -1}}}, {path:"message", options: {sort: {timestamp: -1}}}];
		const dataset = await Dataset.findById(req.params.id).populate(populateQuery);
		
		const filePath = path.join(__dirname, "..", "..", "datasets", dataset.title + ".json");
		
		await fs.writeFile(filePath, JSON.stringify(dataset), (err) => {
			if(err){
				console.log(err)
			} else {
				console.log("File saved!")
			}
		});

		return res.status(200).download(filePath);
	}
}

module.exports = new DatasetController();