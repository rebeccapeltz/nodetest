"use strict";

const fs = require('fs');

//file read
let doFileRead = function() {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/data/data_1.json', (err, data) => {
      if (err) reject(err);
      else resolve(data.toString());
    });
  });
}
doFileRead().then((data) => {
  console.log("success:", data);
}, (err) => {
  console.log("fail:", err);
});

//file write
let doFileWrite = function(filename, filedata) {
  return new Promise((resolve, reject) => {
    fs.writeFile(__dirname + filename, filedata, 'utf8', (err) => {
      if (err) reject(err);
      resolve("successful write " + filename);
    });
  });
}

doFileWrite('/data/test_1.json', '{"msg":"mine"}').then((data) => {
  console.log("success:", data);
}, (err) => {
  console.log("fail:", err);
});

//file find list of files
let doFileList = function(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(__dirname + '/data', (err, files) => {
      if (err) reject("filelist:" + err);
      resolve(files);
    });
  });
}

doFileList().then((data) => {
  console.log("success filelist:", data);
//TODO if data len > 0
  let lastFile = data[0];
  let maxN = 0;
  data.forEach((item)=>{

    let regex = /data_([\d]+).json/; //["data_1.json", "1"]
    let found = item.match(regex);
    if (found){
      let n = Math.max(maxN, parseInt(found[1]));
      if (n > maxN){
        maxN = n;
        lastFile = found[0];
      };
    }
  });
  console.log("last file", lastFile)
}, (err) => {
  console.log("fail:", err);
});
