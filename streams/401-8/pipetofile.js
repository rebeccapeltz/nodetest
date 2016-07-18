'use strict';
//node piper /public/index.html /public/something.html

//piping in bash ps aux |grep becky| grep Finder

//we use the file system module to create streams
const fs = require('fs');

var piper = module.exports = exports = () => {
  var begin = Date.now();
  //31 seconds
  var readFileName = process.argv.length > 2 ? process.argv[2] : '/Users/becky/Documents/data-science/datasci_course_materials/kaggle/train.zip';
  var writeFileName = process.argv.length > 3 ? process.argv[3] : __dirname + '/copy.txt';
  var reader = fs.createReadStream(readFileName);
  var writer = fs.createWriteStream(writeFileName);
  console.log('readfile', readFileName);
  console.log('writefile', writeFileName);

  // pattern is the pipe from readable to writeable
  reader.pipe(writer);
  writer.on('finish', () => {
    var end = Date.now();
    console.log(readFileName, 'total time: ', Math.floor((end - begin) / 1000), 'sec');
  });

};

piper();
//find large file on Mac mdfind 'kMDItemFSSize > 2000000000'
//bigfile: /Users/becky/Documents/data-science/datasci_course_materials/kaggle/train.zip
