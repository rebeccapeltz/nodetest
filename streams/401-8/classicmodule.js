'use strict';

//this module uses the classic 'chunking' method to read from a file

const fs = require('fs');
module.exports = exports = () => {
  let readIn = fs.createReadStream(__dirname + '/public/index.html');
  let bufArr = [];
  readIn.on('error', (err) => {
    //console.log('err', err, err.message);
  });
  readIn.on('data', (data) => {
    bufArr.push(data);
    //console.log(bufArr);
  });
  readIn.on('end', () => {
    let fileOut = fs.createWriteStream(bufArr.toString());
    fileOut.pipe(process.stdout);
  });
};
