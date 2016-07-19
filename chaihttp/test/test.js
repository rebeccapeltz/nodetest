//chai http will fire up your server for you
const chai = require('chai'); // require chai for expect testing
const chaiHTTP = require('chai-http'); // require chai-http so we can make integration, end to end test with http requests
chai.use(chaiHTTP); // tell chai to use chai-http

const expect = chai.expect; // get reference to chai expect
const request = chai.request; // get reference to chai requrest

require('../dayserver');

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
});
