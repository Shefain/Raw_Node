/*
Title : Routes 
Description : Application routes
Author : Shefain (MaHi)
*/

// dependencies
const {sampleHandler} = require('./handalers/routeHandlers/sampleHanaler')




// module scaffolding
const routes  = {
  sample : sampleHandler,
}

module.exports = routes
