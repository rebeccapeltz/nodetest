'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const request = chai.request;
const expect = chai.expect;

const mongoose = require('mongoose');
const Customer = require('../model/customer');
var app = require('../server');
let server;
//start server before tests close after

//connect to mongod
const TEST_DB_SERVER = 'mongodb://localhost/test_db';
process.env.DB_SERVER = TEST_DB_SERVER;

describe('Test CRUD ', () => {
  before((done) => {
    server = app.listen(3000, () => {
      console.log('up on 3000');
      done();
    }); //loads server code and starts with reference
  });
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      server.close(); //stop
      done();
    });
  });

  it('should POST', (done) => {
    request('localhost:3000')
      .post('/api/customer')
      .send({
        name: 'testname',
        active: true,
        year_added: 2016
      })
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Testing CRUD that requires initial data', () => {
  let testCustomer;
  before((done) => {
    server = app.listen(3000, () => {
      console.log('up on 3000');
    }); //loads server code and starts with reference

    testCustomer = Customer({
      name: 'customerTest',
      active: false,
      year_added: 2015
    });
    testCustomer.save((err, customer) => {
      testCustomer = customer;
      done();
    });
  });
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      server.close(); //stop
      done();
    });
  });


  it('should GET a customer', (done) => {
    request('localhost:3000')
      .get('/api/customer/' + testCustomer._id)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.year_added).to.eql(2015);
        done();
      });
  });


});
