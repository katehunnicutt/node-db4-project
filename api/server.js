const express = require("express") //sets up express framework stores in constant
const helmet = require("helmet")
const router = require("./router")

const server = express() //initializing framework and storing in another constant

server.use(helmet()) //secures http headers
server.use(express.json()) //parse
server.use('/api', router)

server.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = server ; //expose