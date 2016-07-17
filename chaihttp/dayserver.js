var http = require('http');

//curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d '{"month":9,"day":11,"year":1957}' localhost:3000
http.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.write('get');
    // res.writeHead(404, {
    //   'Content-Type': 'text/html'
    // });
    res.write('Today is:' + getDay());
    res.end();
  } else if (req.method === 'POST') {
    processPost(req, res);
  }


}).listen(3000, console.log('up on 3000'));

function processPost(req, res) {
  var body = '';
  req.on('data', function(data) {
    console.log('data', data);
    body += data;
  });
  req.on('end', function() {
    console.log('body', body);
    res.write(getBD(JSON.parse(body.toString())) + '\n');
    res.end();

  });
}

function getDayOfWeek(dayInt) {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayInt];
}

function getDay() {
  return getDayOfWeek(new Date().getDay());
}

function getBD(input) {
  return getDayOfWeek(new Date(input.year, input.month - 1, input.day).getDay());
}
