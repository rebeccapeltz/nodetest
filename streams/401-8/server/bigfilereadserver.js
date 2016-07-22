'use strict';

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {

  fs.readFile(__dirname + '/plan9.mp4', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(err.message);
    }
    res.write(data);
    res.end();
  });

}).listen(3000, () => {
  console.log('server up on 3000');
});
