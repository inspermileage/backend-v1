require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")

const app = express()

const server = require("http").Server(app)
const io = require("socket.io")(server)

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
})

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  req.io = io
  next()
})

app.use("/files", express.static(path.resolve(__dirname, "..", "datasets")))

app.use(require("./routes"))

server.listen(process.env.PORT || 3333)
