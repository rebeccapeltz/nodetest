'use strict';

const fs = require('fs');

module.exports = exports = (infile, outfile) => {

  var readFileName = __dirname + infile;
  var writeFileName = __dirname + outfile;
  var reader = fs.createReadStream(readFileName);
  var writer = fs.createWriteStream(writeFileName);

  // readable piping to writable
  reader.pipe(process.stdout);
  reader.pipe(writer);

};
