/*
Title : Uptime monitoring Application 
Description : A restFul API to monitor up or down time of user difined links 
Author : Shefain (MaHi)
*/

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment  = require('./helpers/invironment')
const data = require('./lib/data2')

/*
app object - Module scaffolding | 
we use this method to push everything in a single object|
it allows us to export a single a object |
when we need the property we can call from the object
*/
const app = {};


data.create('test',"file"," hi my name is mahi ",(e )=>{

  console.log("error",e )

})

// configaration
app.config = {
  port: environment.port,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  server.listen(environment.port, () => {
    console.log(`it's running on port ${environment.port}...`);
  });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// Start the server
app.createServer();
