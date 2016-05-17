"use strict";
var http = require('http');
var fs = require('fs');

this.server = http.createServer(function(req, res) {
  res.on('error', (e)=>{
    console.log(e.message);
    res.statusCode = 404; //resource not found
    res.end("Error in response:",e.message);
  });
  //handle request error by logging error
  req.on('error', (e)=>{
    console.log(e);
  });

  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    let filename = req.url;
    fs.createReadStream("/assets" +filename).pipe(res);
  } else {
    res.statusCode = 400;
    res.end("server will only GET files")
  }
});

exports.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};
