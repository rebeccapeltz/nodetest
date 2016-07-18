'use strict';
const fs = require('fs');

var filewriter = module.exports = exports = () => {
  var begin = Date.now();
  var readFileName = process.argv.length > 2 ? process.argv[2] : '/Users/becky/Documents/data-science/datasci_course_materials/kaggle/train.zip';
  var writeFileName = process.argv.length > 3 ? process.argv[3] : __dirname + '/copy.txt';
  console.log('name',readFileName);
  fs.readFile(readFileName, (err, data) => {
    if (err) throw err;
    fs.writeFile(writeFileName, data, (err) => {
      if (err) throw err;
      var end = Date.now();
      console.log(readFileName, 'total time: ', Math.floor((end-begin)/1000),'sec');
    });
  });
};

filewriter();
//find large file on Mac mdfind 'kMDItemFSSize > 2000000000'
//bigfile: /Users/becky/Documents/data-science/datasci_course_materials/kaggle/train.zip
