var http = require('http');

this.server = http.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Hello, world!\n');
  } else if (method === 'POST') {

  }
});

exports.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};
