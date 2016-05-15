"use strict";
var http = require('http');

this.server = http.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Hello, world!\n');
  } else if (req.method === 'POST') {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    let jsonStr = '';
    req.on('data', (buf) => {
      jsonStr += buf.toString();
    });
    req.on('end', (buf) => {
      let jsonObj = JSON.parse(jsonStr);
      res.write(jsonStr + "\n");
      res.end();
    })
  }
});

exports.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};
