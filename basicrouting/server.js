var http = require('http');
var url = require('url');
var fs = require('fs'); // file system


var sendFile = function(response,filename,contentType){
  response.writeHead(200, {
    "Content-Type": contentType
  });
  console.log(__dirname + filename);
  fs.createReadStream(__dirname + filename).pipe(response);
}

var server = http.createServer(function(req, res) {
  var uri = url.parse(req.url).pathname;
  console.log("uri", uri);
  if (uri === '/') {
    sendFile(res,"/index.html","text/plain");

  } else if (uri === '/games') {
    sendFile(res,"/games.html","text/html");

  } else if (uri === '/links') {
    sendFile(res,"/links.html","text/html");

  } else if (uri === '/data.json') {
    //sendFile(res,"/data.json","application/json");
    sendFile(res,"/data.json","text/javascript");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });
    res.write("404 Not Found\n");
    res.end();
  }

});
server.listen(8888);
