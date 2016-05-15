"use strict";
//curl -d '{"msg":"test"}' -X POST localhost:3000
const http = require('http');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.write("<p>Hello</p>\n");
    res.end();

  } else if (req.method === 'POST') {
    res.writeHead(200, {
      "Content-Type": "application/json"
      //"Content-Type": "plain/text"
    });
    let jsonStr = '';
    req.on('data', (buf) => {
      jsonStr += buf.toString();
    });
    req.on('end', (buf) => {
      let jsonObj = JSON.parse(jsonStr);
      res.write(jsonStr + "\n");
      res.end();
    })
  }

}).listen(3000, () => {
  console.log("server listening on port 3000");
});
