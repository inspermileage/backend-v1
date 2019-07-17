const Data = require("../models/Data")
const Dataset = require("../models/Dataset")

class DataController {
  async store(req, res) {
    const dataset = await Dataset.findById(req.params.id)

    const data = await Data.create({
      button: req.body.button,
      accelerometer: req.body.accelerometer,
      altimeter: req.body.altimeter,
      barometer: req.body.barometer,
      temperature: req.body.temperature,
      rpm: req.body.rpm,
      voltage: req.body.voltage,
      current: req.body.current,
    })

    dataset.data.push(data)

    await dataset.save()

    req.io.emit("NewData", data)

    return res.json(data)
  }
}

module.exports = new DataController()
