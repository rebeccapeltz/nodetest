'use strict';

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {

  res.end('hi\n');

}).listen(3000, () => {
  console.log('server up on 3000');
});
