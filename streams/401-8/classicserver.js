'use strict';

//this server uses the classic 'chunking' method to read from a file

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  let readIn = fs.createReadStream(__dirname + '/public/index1.html');
  let bufArr = [];
  readIn.on('error', (err) => {
    console.log('err', err, err.message);
    res.statusCode = 400;
    res.write(err.message);
    res.end();
  });
  readIn.on('data', (data) => {
    bufArr.push(data);
  });
  readIn.on('end', () => {
    res.statusCode = 200;
    res.end(bufArr.toString());
  });

}).listen(3000, () => {
  console.log('server up on 3000');
});
