/*
Title : sample handaler 
Description : sample handaler
Author : Shefain (MaHi)
*/

// module scafolding

const handaler = {};

handaler.sampleHandle = (requestProperties, callback) => {
  callback(200, {
    message: " it's from sample handler (Success)",
  });
};

module.exports = handaler;
