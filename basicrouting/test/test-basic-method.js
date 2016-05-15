"use strict";
var server = require('../lib/basic-method');

describe('server', function() {
  before(function() {
    server.listen(3000);
  });

  after(function() {
    server.close();
  });

  var assert = require('assert'),
    http = require('http');

  describe('/ GET', function() {
    it('should return 200', function(done) {
      http.get('http://localhost:3000', function(res) {
        assert.equal(200, res.statusCode);
        done();
      });
    });

    it('should say "Hello, world!"', function(done) {
      http.get('http://localhost:3000', function(res) {
        var data = '';
        res.on('data', function(chunk) {
          data += chunk;
        });

        res.on('end', function() {
          assert.equal('Hello, world!\n', data);
          done();
        });
      });
    });

  });

  describe('/ POST', function() {
    var postData = JSON.stringify({
      'msg': 'Hello World!'
    });
    var options = {
      method: 'POST',
      hostname: 'localhost',
      port: 3000,
      path: '/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    };

    it('should return 200', function(done) {
      console.log(options);
      var req = http.request(options, (res) => {
        res.setEncoding('utf8');
        console.log('Status:', res.statusCode);
        let data = '';
        res.on('data', (chunk)=>{
          console.log('BODY:',chunk);
          data += chunk;
        })
        res.on('end', () => {
          console.log('in end', data);
          assert.equal(postData+'\n', data);
          done();
        })
      });
      req.on('error', (e)=>{
        console.log('problem with request:',$(e.message));
      })
      console.log("call req", postData);
      req.write(postData);
      req.end();
    });
  });
});
