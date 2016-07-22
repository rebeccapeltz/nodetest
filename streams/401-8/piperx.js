'use strict';
//node piper /public/index.html /public/something.html
//piping in bash ps aux |grep becky| grep Finder
//we use the file system module to create streams
const fs = require('fs');

var piper = module.exports = exports = (readFileName, writeFileName) => {

  readFileName = readFileName ? readFileName : '/public/index.html';
  writeFileName = writeFileName ? writeFileName : '/public/copy.html';
  var reader = fs.createReadStream(__dirname + readFileName);
  var writer = fs.createWriteStream(__dirname + writeFileName);

  // pattern is the pipe from readable to writeable
  reader.pipe(writer);
  reader.pipe(process.stdout);
};

piper('/public/index.html', '/public/other.html');
