"use strict";

module.exports =
  exports = function(req) {
    let dataStr = '';
    return new Promise((resolve, reject) => {

      req.on('data', (dataBuf) => {
        dataStr += dataBuf.toString();
      });

      req.on('end', ()=> {
        try {
          let json = JSON.parse(dataStr);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      })
    })

  }
