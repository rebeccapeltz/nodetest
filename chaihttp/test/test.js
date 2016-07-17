const chai = require('chai'); // require chai for expect testing
const chaiHTTP = require('chai-http'); // require chai-http so we can make integration, end to end test with http requests
chai.use(chaiHTTP); // tell chai to use chai-http

const expect = chai.expect; // get reference to chai expect
const request = chai.request; // get reference to chai requrest

var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

require('../dayserver');


describe('HTTP server test', function() {
  it('/get day should return the day of the week for today', function(done) {
    request('localhost:3000')
      .get('/')
      .end(function(err, res) {
        expect(err).to.eql(null, 'Error is null');
        expect(res).to.have.status(200, 'Status code is 200');
        //console.log('getToday is:' + days[new Date().getDay()] +'\n');
        expect(res.text).to.eql('getToday is:' + days[new Date().getDay()] + '\n');
        done();
      });
  });
  it('POST / day should return the day of the week for a posted date {month, day, year}', function(done) {
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
        //console.log('getToday is:' + days[new Date().getDay()] +'\n');
        expect(res.text).to.eql('Sun\n');
        done();
      });
  });
});
