"use strict";
var http = require('http');

this.server = http.createServer(function(req, res) {
  //handle response error with a 400
  res.on('error', (e)=>{
    console.log(e.message);
    res.statusCode = 400; //resource not found
    res.end("Error in response:",e.message);
  });
  //handle request error by logging error
  req.on('error', (e)=>{
    console.log(e);
  });

  if (req.method === 'GET' && req.url === '/echo'){
    req.pipe(res);

  } else {
    res.statusCode = 404,
    res.end("Only accepting GET /echo");
  }

});

exports.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};
