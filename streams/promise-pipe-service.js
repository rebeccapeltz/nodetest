'use strict';

const fs = require('fs');
const http = require('http');
const jsonPromise = require('./lib/json-promise');
const stream = require('stream');


http.createServer((req, res) => {
  //TODO req error
  req.on('error', (err) => {
    res.statusCode = 400;
    res.end('Client Request Error\n'+ err);
  });

  //TODO res error
  req.on('error', (err) => {
    res.statusCode = 400;
    res.end('Server response Error' + err + '\n');
  });

  //POST
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
        console.log('promise resolve', JSON.stringify(data));
        return data;
      }, (err) => {
        console.log('promise reject', err);
        res.statusCode = 400;
        res.end('JSON parse fail\n');
      }).then((data) => {
        //var buffer = new Buffer(data); //data is a string
        var file = fs.createWriteStream(__dirname + '/data/test.json');
        // Initiate the source
        var bufferStream = new stream.PassThrough();
        // Write your buffer
        var buffer = new Buffer(JSON.stringify(data));
        bufferStream.end(buffer);
        bufferStream.pipe(file);
        //file.end(); //NO!!
        console.log('post successful', JSON.stringify(data));
        res.end('post successful ' + JSON.stringify(data) + '\n');


      });
    });
    return;
  }

  //GET
  if (req.method === 'GET' && req.url === '/') {
    // read data
    var file = fs.createReadStream(__dirname + '/data/test.json');
    return file.pipe(res);
  }

  //NOT FOUND
  res.status = 404;
  res.end('Not found.\n');

}).listen(3000, () => {
  console.log('server up on 3000');
});
