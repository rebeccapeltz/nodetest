'use strict';
const fs = require('fs');
var piper = module.exports = exports = () => {
  var readFileName = process.argv.length > 2 ? process.argv[2] : __dirname + '/public/index.html';
  var writeFileName = process.argv.length > 3 ? process.argv[3] : __dirname + '/public/copy.html';
  var reader = fs.createReadStream(readFileName);

  reader.on('open', () => {
    var writer = fs.createWriteStream(__dirname + writeFileName);
    reader.pipe(writer);
    reader.pipe(process.stdout);
  });
  reader.on('error', (err) => {
    console.log('error', err);
  });

};
piper();
