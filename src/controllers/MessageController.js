const Message = require("../models/Message");
const Dataset = require("../models/Dataset");

class MessageController {
	async store(req, res) {
		const dataset = await Dataset.findById(req.params.id);

		const message = await Message.create({
			type: req.body.type,
			text: req.body.text,
		});

		dataset.message.push(message);

		await dataset.save();
		
		return res.json(dataset);
    }
    
    async show(req, res) {
		const lastMessage = await Dataset.findById(req.params.id).populate({
			path: "message",
			options: {
				sort: {
					timestamp: -1
				},
				limit: 1
			}
		});
		return res.json(lastMessage.message[0]);
	}
}

module.exports = new MessageController();