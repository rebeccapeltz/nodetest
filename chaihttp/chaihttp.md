#### Chai HTTP will let us call http requests and send in chai expects

https://github.com/chaijs/chai-http  

###### setting up the required code

```
  npm init
  npm install mocha --save-dev
  npm install chai --save-dev
  npm install chai-http --save-dev
```

``` JavaScript
const chai = require('chai');           // require chai for expect testing
const chaiHTTP = require('chai-http');  // require chai-http so we can make integration, end to end test with http requests
chai.use(chaiHTTP);                     // tell chai to use chai-http

expect = chai.expect;                   // get reference to chai expect
const request = chai.request;           // get reference to chai requrest
```
###### Using the code
``` JavaScript
describe('HTTP server test', function () {
  it('GET / day should return the day of the week for today', function () {
      });
  });

mocha test
```
###### Test that there are no errors, status code, data

GET /  
``` JavaScript
describe('HTTP server test', function() {
  var today;
  before(function(){
    //when dealing with a changing output you may need to capture before test
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    today = days[new Date().getDay()];
  });
  it('GET / dayserver should return the day of the week for today', function(done) {
    request('localhost:3000')
      .get('/')
      .end(function(err, res) {
        expect(err).to.eql(null, 'Error is null');
        expect(res).to.have.status(200, 'Status code is 200');
        expect(res.text).to.eql('Today is:' + today + '\n');
        done();
      });
  });
  ```

POST / {month:, day:, year: }
``` JavaScript
//I expect that Jan 1, 2017 is a Sunday
it('POST / dayserver should return the day of the week for a posted date {month, day, year}', function(done) {
  request('localhost:3000')
    .post('/')
    .send({
      month: 1,
      day: 1,
      year: 2017
    })
    .end(function(err, res) {
      expect(err).to.eql(null, 'Error is null');
      expect(res).to.have.status(200, 'Status code is 200');
      expect(res.text).to.eql('Sun\n');
      done();
    });
});
```  

dayserver
``` JavaScript
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

```


##### Using node-inspector to debug
http://blog.andrewray.me/how-to-debug-mocha-tests-with-chrome/

npm install -g node-inspector
http://127.0.0.1:8080/?port=5858

mocha
--> go to browser and refresh
