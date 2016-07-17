'use strict';
const fs = require('fs');
var piper = module.exports = exports = () => {
  var readFileName = process.argv.length > 2 ? process.argv[2] : '/public/index.html';
  var writeFileName = process.argv.length > 3 ? process.argv[3] : '/public/copy.html';
  var reader = fs.createReadStream(__dirname + readFileName);

  reader.on('open', () => {
    var writer = fs.createWriteStream(__dirname + writeFileName);
    reader.pipe(writer);
    reader.pipe(process.stdout);
  });
  reader.on('error', (err) => {
    console.log ('error', err);
  });

};
piper();
