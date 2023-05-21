/*
Title : Uptime monitoring Application 
Description : A restFul API to monitor up or down time of user difined links 
Author : Shefain (MaHi)
*/

//Dependencies
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder')

//app object - Module scaffolding
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
app.handleReqRes = (req, res) => {
  // get url and parse
  const parsedUrl = url.parse(req.url, true);

  // get the pathname
  const path = parsedUrl.pathname;

  // get the method as lower string
  const method = req.method.toLowerCase();

  // get the query string
  const querStringObj = parsedUrl.query;

  // get haders or meta data
  const hadersObj = req.headers;
  
  
  
  
  // get body or payload
  const decoder = new StringDecoder('utf-8')
  let realData= '';

  req.on('data',(chunk)=>{
    realData +=decoder.write(chunk)
  })

  req.on('end',()=>{
    realData +=decoder.end()
    console.log(realData)
  })
  



  console.log(parsedUrl);
  res.end(' Hello world');
};

// Start the server
app.createServer();
