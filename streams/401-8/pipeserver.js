'use strict';

//this server uses  a readable stream and pipes to a writable stream

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  let readIn = fs.createReadStream(__dirname + '/public/index1.html');
  //once the stream is open we can simply pipe to response
  readIn.on('open', () => {
    res.statusCode = 400;
    readIn.pipe(res);
  });

  //we want an error handler in case the file is not found
  readIn.on('error', (err) => {
    console.log(err);
    res.statusCode = 404;
    res.end(err.message); //must be a string
  });

}).listen(3000, () => {
  console.log('server up on 3000');
});
