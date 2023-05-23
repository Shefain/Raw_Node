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
const {sampleHandler} = require('../handalers/routeHandlers/sampleHanaler');


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
  const parsedUrl = url.parse(req.url,false); // get url and parse  
  const path = parsedUrl.pathname;  // get the pathname  
  const trimedPath = path.replace(/^\/+|\/+$/g,'') ; // removed the / from the starting and ending only
  const method = req.method.toLowerCase();  // get the method as lower string  
  const querStringObj = parsedUrl.query;  // get the query string  
  const hadersObj = req.headers;  // get haders or meta data


  // puting evering protperties of req in a single object for easy export 
  const requestProperties = {
    parsedUrl,
    path,
    trimedPath,
    method,
    querStringObj,
    hadersObj,
  }

  // we are selecting the path in routes  
  const chosenHandler = routes[trimedPath] ? routes[trimedPath]: notFoundHandaler ;

  // we are calling the handaler here
  chosenHandler(requestProperties, (statusCode, payload)=>{

    statusCode = typeof(statusCode) === 'number'? statusCode : 500
    payload = typeof(payload) === 'object'? payload : {}

    const payloadString = JSON.stringify(payload)

    // return response
    res.writeHead(statusCode)
    console.log(trimedPath)
    res.end(payloadString)


  })
;


};




module.exports = handler;
