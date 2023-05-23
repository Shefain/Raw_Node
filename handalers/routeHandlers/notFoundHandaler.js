/*
Title : sample handaler 
Description : sample handaler
Author : Shefain (MaHi)
*/

// module scafolding

const handaler = {};

handaler.notFoundHandaler = (requestProperties, callback) => {
  callback(404, {
    message: '<h1> Not Found </h1>',
  });
};

module.exports = handaler;
