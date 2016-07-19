var http = require('http');
// POST {month:, day: , year:}  get back day of week
// GET get back today's day of week
//curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d '{"month":1,"day":1,"year":2017}' localhost:3000
// You don't really need Content-type for curl POST but you will need it later
//curl -i  -X POST -d '{"month":1,"day":1,"year":2017}' localhost:3000
//curl localhost:3000
http.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.write('Today is:' + getDay() + '\n');
    res.end();
  } else if (req.method === 'POST') {
    processPost(req, res);
  }
}).listen(3000, console.log('up on 3000'));

// a function to process the POSTED data and provide a response
function processPost(req, res) {
  var body = '';  //anything concatenated to this will be 'toStringed'
  req.on('data', function(data) {
    body += data;
  });
  req.on('end', function() {
    res.write(getDay(JSON.parse(body)) + '\n'); //status is 200 by default
    res.end();
  });
}

//local function gets a day of week string
function getDayOfWeek(dayInt) {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayInt];
}

//local function input is supplied with POST processing
function getDay(input) {
  if (input) return getDayOfWeek(new Date(input.year, input.month - 1, input.day).getDay());
  return getDayOfWeek(new Date().getDay());
}
