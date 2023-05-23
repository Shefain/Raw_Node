/*
Title : Routes 
Description : Application routes
Author : Shefain (MaHi)
*/

// dependencies
const {sampleHandle } = require('./handalers/routeHandlers/sampleHanaler');

// module scaffolding
const routes = {
  'sample': sampleHandle,
};

module.exports = routes;
