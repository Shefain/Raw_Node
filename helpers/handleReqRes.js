/*
Title : Handle Request and Response 
Description : Handle req and response
Author : Shefain (MaHi)
*/


// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const {notFoundHandaler} = require('../handalers/routeHandlers/notFoundHandaler');
const routes = require('../routes')


/*
Module scaffolding | 
we use this method to push everything in a single object|
it allows us to export a single a object |
when we need the property we can call from the object
*/ 
const handler = {};


// handle request and response 
handler.handleReqRes = (req, res) => {
  
  // properties from req ^ object
  const parsedUrl = url.parse(req.url, true); // get url and parse  
  const path = parsedUrl.pathname;  // get the pathname  
  const method = req.method.toLowerCase();  // get the method as lower string  
  const querStringObj = parsedUrl.query;  // get the query string  
  const hadersObj = req.headers;  // get haders or meta data

  // puting evering protperties of req in a single object for easy export 
  const requestProperties = {
    parsedUrl,
    path,
    method,
    querStringObj,
    hadersObj,
  }

  // we are selecting the path in routes  
  const chosenHandler = routes[path] ? routes[path] : notFoundHandaler;

  // we are calling the handaler here
  chosenHandler(requestProperties,(statusCode, payload)=>{
    statusCode = typeof(statusCode) === 'number'? statusCode : 500
    payload = typeof(payload) === 'object'? payload : {}

  })
  res.end(' Hello world');


};




module.exports = handler;
