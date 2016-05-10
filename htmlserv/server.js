var fs = require('fs'); // file system
var http = require('http');
var url = require("url");
var path = require("path");

var server = http.createServer(function(req, res) {

  var uri = url.parse(req.url).pathname,
    filename = path.join(process.cwd(), uri);

  var contentTypesByExtension = {
    '.html': "text/html",
    '.css': "text/css",
    '.js': "text/javascript"
  };

  fs.exists(filename, function(exists) {
    if (!exists) {
      res.writeHead(404, {
        "Content-Type": "text/plain"
      });
      res.write("404 Not Found\n");
      res.end();
      return;
    }
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    var headers = {};
    var contentType = contentTypesByExtension[path.extname(filename)];
    if (contentType) headers["Content-Type"] = contentType;

    res.writeHead(200, headers)

    fs.createReadStream(filename).pipe(res)
  });
});
server.listen(8888);
