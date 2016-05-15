//curl --data "{\"user\":\"becky\"}" localhost:3000
//httpie:  echo '{"msg":"test"}' | http PUT localhost:3000

const http = require('http');
const jsonPromise = require('./jsonPromise');

http.createServer((req, res) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    return jsonPromise(req)
      .then((reqBody) => {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.write('{"msg": "valid json!"}\n');
      }, (err) => {
        console.log(err);
        res.writeHead(422, {
          'Content-Type': 'application/json'
        });
        res.write('{"msg": "invalid json"}');
      }).then(() => {
        res.end();
      });
  }

  res.writeHead(404, {
    'Content-Type': 'application/json'
  });

  res.write('{"msg":"not found"}\n');
  res.end();




}).listen(3000, () => {
  console.log("server on port 3000");
});
