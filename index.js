/*
Title : Uptime monitoring Application 
Description : A restFul API to monitor up or down time of user difined links 
Author : Shefain (MaHi)
*/



// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');



/*
app object - Module scaffolding | 
we use this method to push everything in a single object|
it allows us to export a single a object |
when we need the property we can call from the object
*/ 
const app = {};



// configaration
app.config = {
  port: 4000,

};



// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  server.listen(app.config.port, () => {
    console.log(`it's running on port ${app.config.port}...`);
  });

};



// handle Request Response
app.handleReqRes = handleReqRes;



// Start the server
app.createServer();
