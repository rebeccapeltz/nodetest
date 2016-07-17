'use strict';

const fs = require('fs');
const http = require('http');

http.createServer(() => {

  let instream = fs.createReadStream(process.stdin);
  let outstream = fs.createWriteStream(process.stdout);

  instream.pipe(outstream);


}).listen(3000, () => {
  console.log('server up on 3000');
});
