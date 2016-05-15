const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200,{"Content-Type":"text/plain"});

  res.write("<p>Hello</p>\n");
  res.end();


}).listen(3000, () => {console.log("server listening on port 3000");});
