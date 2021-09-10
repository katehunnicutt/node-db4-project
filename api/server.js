const express = require("express") //sets up express framework stores in constant
const helmet = require("helmet")
const recipesRouter = require("./router")

const server = express() //initializing framework and storing in another constant

server.use(helmet()) //secures http headers
server.use(express.json()) //parse

server.use('/api/recipes', recipesRouter)


server.use('*', (req, res) => {
  res.json({ api: 'up'})
})


module.exports = server ; //expose