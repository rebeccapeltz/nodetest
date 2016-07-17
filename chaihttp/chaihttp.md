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
###### Test that there are no errors

``` JavaScript
describe('HTTP server test', function() {
  it('/get day should return the day of the week for today', function(done) {
    request('localhost:3000')
      .get('/')
      .end(function(err) {
        expect(err).to.eql(null);
        done();
      });
  });
});
```
###### Test status code and text
``` JavaScript
describe('HTTP server test', function() {
  it('/get day should return the day of the week for today', function(done) {
    request('localhost:3000')
      .get('/')
      .end(function(err, res) {
        expect(err).to.eql(null, 'Error is null');
        expect(res).to.have.status(200, 'Status code is 200');
        //console.log('getToday is:' + days[new Date().getDay()] +'\n');
        expect(res.text).to.eql('getToday is:' + days[new Date().getDay()] +'\n');
        done();
      });
  });
  it('/get day should return the day of the week for a posted date {month, day, year}', function() {

  });
});
```
      s


##### Using node-inspector to debug
http://blog.andrewray.me/how-to-debug-mocha-tests-with-chrome/

npm install -g node-inspector
http://127.0.0.1:8080/?port=5858

mocha
--> go to browser and refresh
