var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    //console.log("Request received.");
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    //route(handle, pathname, response);

    //response.writeHead(200, {
    //    "Content-Type": "text/plain"
    //});
    //response.write("Hello World");
    //response.end();

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '" +
        postDataChunk + "'.");
    });

    request.addListener("end", function() {
      console.log("end listener");
      route(handle, pathname, response, postData); //routed to event handler
    });

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
