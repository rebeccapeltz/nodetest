'use strict';
//node piper /public/index.html /public/something.html

//piping in bash ps aux |grep becky| grep Finder

//we use the file system module to create streams
const fs = require('fs');

var piper = module.exports = exports = () => {

  var readFileName = process.argv.length > 2 ? process.argv[2] : '/public/index.html';
  var writeFileName = process.argv.length > 3 ? process.argv[3] : '/public/copy.html';
  var reader = fs.createReadStream(__dirname + readFileName);
  var writer = fs.createWriteStream(__dirname + writeFileName);

  // pattern is the pipe from readable to writeable
  reader.pipe(writer);
  reader.pipe(process.stdout);
};

piper();
