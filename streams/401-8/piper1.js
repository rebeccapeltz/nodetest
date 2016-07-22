'use strict';

const fs = require('fs');

var piper = module.exports = exports = () => {

  var readFileName = __dirname + '/public/index.html';
  var writeFileName = __dirname + '/public/copy.html';
  var reader = fs.createReadStream(readFileName);
  var writer = fs.createWriteStream(writeFileName);

  // readable piping to writable
  reader.pipe(process.stdout);
  reader.pipe(writer);

};

piper();
