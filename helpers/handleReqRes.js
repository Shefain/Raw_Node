/*
Title : Handle Request and Response 
Description : Handle req and response
Author : Shefain (MaHi)
*/

// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
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
  const decoder = new StringDecoder('utf-8');
  let realData = '';

  req.on('data', (chunk) => {
    realData += decoder.write(chunk);
  });

  req.on('end', () => {
    realData += decoder.end();
    console.log(realData);
  });

  console.log(parsedUrl);
  res.end(' Hello world');
};

module.exports = handler;
