const Dataset = require("../models/Dataset");

class DatasetController {
	async store(req, res) {
		const dataset = await Dataset.create({
			title: req.body.title
		});

		return res.json(dataset);
	}

	async list(req, res) {
		const dataset = await Dataset.find({}).select("title");
		return res.json(dataset);
	}

	async show(req, res) {
		const dataset = await Dataset.findById(req.params.id).populate({
			path: "data",
			options: {
				sort: {
					createdAt: -1
				}
			}
		});
		return res.json(dataset);
	}
}

module.exports = new DatasetController();