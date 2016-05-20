"use strict";
const http = require('http');

const a = 1;
const obj = {a:1};
http.createServer((req, res) => {
  console.log(a);
  //a++;
  obj.a++;
  console.log(obj.a, obj.a);
  res.end("done");


}).listen(3000, ()=>{console.log("server up on 3000")});
