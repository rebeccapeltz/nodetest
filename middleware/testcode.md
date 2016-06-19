# Test
```
//http://willi.am/node-mocha-supertest/
var assert = require("assert");
var request = require("request");

require("../server");

describe("Server", function() {
    it("responds with JSON message {\"msg\": \"No model\"} at the root", function(done) {
        request("http://localhost:3000/api", function(err, response, body) {
            if (err) done(err);

            var payload = JSON.parse(body);
            assert.equal(payload.msg, "No model");

            done();
        });
    });
});
```
