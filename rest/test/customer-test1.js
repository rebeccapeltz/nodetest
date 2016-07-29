'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');
const mongoose = require('mongoose');
const Customer = require('../model/customer1');
chai.use(chaiHTTP);

const expect = chai.expect;
const request = chai.request;
const TEST_DB_SERVER = 'mongodb://localhost/test_db';
process.env.DB_SERVER = TEST_DB_SERVER; //use test database for testing
//const server = require('../server1');

describe('Testing CRUD routes Customer', () => {
  var server;
  before((done) => {
    //require('../server1');
    server = require('../server1');
    //debugger;
    done();
  });
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {});
    server.close();
    //debugger;
    done();
  });

  it('should respond with 404 to bad path', (done) => {
    request('localhost:3000')
      .get('/badpath')
      .end((err, res) => {
        expect(err).to.not.eql(null);
        expect(res).to.have.status(404);
        expect(res.text).to.eql('{"message":"route not found"}');
        done();
      });
  });
  it('should GET a list of customers', (done) => {
    request('localhost:3000')
      .get('/api/customer/')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(Array.isArray(res.body)).to.eql(true);
        done();
      });
  });
  it('should POST a customer and have id', (done) => {
    request('localhost:3000')
      .post('/api/customer/')
      .send({
        name: 'testname',
        active: true,
        year_added: 2106
      })
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body.name).to.eql('testname');
        expect(res.body).to.have.property('_id');
        done();
      });
  });

  describe('tests that need a customer', () => {
    let testCustomer;
    before((done) => {
      testCustomer = Customer({
        name: 'customertest',
        active: false,
        year_added: 2015
      });
      testCustomer.save((err, customer) => {
        testCustomer = customer;
        done();
      });
    });

    it('should GET a single customer', (done) => {
      request('localhost:3000')
        .get('/api/customer/' + testCustomer._id)
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          expect(res.body.year_added).to.equal(2015);
          expect(res.body.active).to.eql(false);
          expect(res.body._id).to.eql(testCustomer._id.toString());
          done();
        });
    });

    it('should PUT a customer field change', (done) => {
      testCustomer.active = true;
      request('localhost:3000')
        .put('/api/customer/' + testCustomer._id)
        .send(testCustomer)
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          expect(res.body.message).to.eql('success');
          done();
        });
    });

    it('should DELETE a customer', (done) => {
      request('localhost:3000')
        .delete('/api/customer/' + testCustomer._id)
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          expect(res.body.message).to.eql('success');
          done();
        });
    });
  });
});
