var http = require('http');


http.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.write('get');
    res.end();
  }
  if (req.method === 'POST') {
    res.write('post');
    res.end();
  }


}).listen(3000, console.log('up on 3000'));
