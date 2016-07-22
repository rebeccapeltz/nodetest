'use strict';

const fs = require('fs');

module.exports = exports = () => {
  //infile '/public/index.html'
  var readFileName = process.argv.length > 2 ? __dirname + process.argv[2] : __dirname + '/public/index.html';
  var writeFileName = process.argv.length > 3 ? __dirname + process.argv[3] : __dirname + '/public/copy.html';
  var reader = fs.createReadStream(readFileName);
  var writer = fs.createWriteStream(writeFileName);

  // readable piping to writable
  reader.pipe(process.stdout);
  reader.pipe(writer);

};
