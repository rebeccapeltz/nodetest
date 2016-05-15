"use strict";
const http = require('http');

http.createServer(function(req,res){
  res.writeHead(200);
  //res.end("Hello World\n");
  let currentDate = new Date();
  let dateStr = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();

  res.end((new Date())+"\n");
}).listen(7777);
