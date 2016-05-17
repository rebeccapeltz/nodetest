"use strict";

const fs = require('fs');
const http = require('http');
const jsonPromise = require('./lib/json-promise');


http.createServer((req, res) => {
  //TODO req error
  req.on('error', (err) => {
    res.statusCode = 400;
    res.end("Request Error\n");
  })

  //TODO res error

  if (req.method === 'POST') {
    //read data into buffer
    let bufArr = [];
    req.on('data', (data) => {
      res.status = 200;
      bufArr.push(data);
    });
    req.on('end', () => {
      //parse json
      jsonPromise(bufArr.toString()).then((data) => {
        console.log("promise resolve",JSON.stringify(data));
        return data;
      }, (err) => {
        console.log("promise reject",err);
        res.statusCode = 400;
        res.end("JSON parse fail\n");
      }).then((data)=>{
        var file = fs.createWriteStream(__dirname + '/data/test.json');
        file.on('error', (err) => {
          res.statusCode = 400;
          console.log(err + "error writing\n");
          res.end("error writing json\n");
        });

        file.write(JSON.stringify(data));
        file.end();
        res.end(bufArr.toString() + '\n');
      });
      //parse error
      // let jsonData = {};
// try {
//   jsonData = JSON.parse(bufArr.toString());
//   //write to file
//   //handle write error
//
//   var file = fs.createWriteStream(__dirname + '/data/test.json');
//   file.on('error', (err) => {
//     res.statusCode = 400;
//     console.log(err + "error writing\n");
//     res.end("error writing json\n");
//   });
//
//   file.write(JSON.stringify(jsonData));
//   file.end();
//   res.end(bufArr.toString() + '\n');
//
// } catch (e) {
//   res.statusCode = 400;
//   console.log("error parsing json\n");
//   res.end("error parsing json\n");
// }

    });
  } else if (req.method === 'GET') {
    // read data

    var file = fs.createReadStream(__dirname + '/data/test.json');
    var bufArr = [];
    file.on('error', (err) => {
      res.statusCode = 400;
      res.end("can't find/open/read file");
    });
    file.on('data', (data) => {
      bufArr.push(data);
    });
    file.on('end', () => {
      res.writeHead(200, {
        "Content-Type": "application/json"
      });
      res.end(bufArr.toString() + '\n');

    });


    //respond with data


  } else {
    res.status = 404;
    res.end("Not found.\n");
  } //TODO else 404

}).listen(3000, () => {
  console.log('server up on 3000');
});
