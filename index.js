/*
Title : Uptime monitoring Application 
Description : A restFul API to monitor up or down time of user difined links 
Author : Shefain (MaHi)
*/

//Dependencies
const http = require('http')

//app object - Module scaffolding
const app = {}


// configaration
app.config = {
  port:3000
}

// create server
app.createServer = ()=>{
  const server = http.createServer(app.handleReqRes)

  server.listen(app.config.port, ()=>{
    console.log(`it's running...on port ${app.config.port}`)
  })
}

// handle Request Response
app.handleReqRes = (req,res)=>{
  res.end(' Hello world')
}

// Start the server
app.createServer()
