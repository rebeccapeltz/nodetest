'use strict';

//using debug: DEBUG=* nodemon server

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json(); //need the json functionality of the body parser
//const http = require('http');
const Debug = require('debug');
var debug = Debug('routes');
debug('some string');
const Customer = require('../model/customer'); //model

const customerRouter = module.exports = exports = express.Router();

//GET returns a list of 0 or more or error
customerRouter.get('/', (req, res, next) => {
  Customer.find({}, (err, customers) => { //mongoose find
    if (err) return next(err);
    debug('%s %s', req.method, req.url);
    res.json(customers); //return customers as json
  });
});

//POST returns the posted object with an id or error
customerRouter.post('/', jsonParser, (req, res, next) => {

  //let newCustomer = new Customer(req.body);  //don't need new
  Customer(req.body).save((err, customer) => { //save on the instance
    if (err) return next(err);
    debug('%s %s %O', req.method, req.url, customer);
    res.json(customer); //customer has an _id now
  });
});

//GET single customer by id or error
customerRouter.get('/:id', (req, res, next) => {
  debug(req.method + ' ' + req.url);
  let _id = req.params.id;
  Customer.findOne({
    _id
  }, (err, customer) => {
    if (err) return next(err);
    debug('%s %s %O', req.method, req.url, customer);
    console.log('get route', customer);
    res.json(customer);
  });
});

//PUT returns success or error
customerRouter.put('/:id', jsonParser, (req, res, next) => {
  debug('%s %s %s', req.method, req.url, req.params.id);
  let _id = req.params.id;
  debug('putting %O',req.body);
  Customer.findOneAndUpdate({_id}, req.body, (err) => {
    if (err) return next(err);

    let message = 'success';
    res.json({
      message
    }); //return success
  });
});

//DELETE returns success or error
customerRouter.delete('/:id', (req, res, next) => {
  debug(req.method + ' ' + req.url);
  let _id = req.params.id;
  Customer.findOneAndRemove({
    _id
  }, (err) => {
    if (err) return next(err);
    let message = 'success';
    res.json({
      message
    });
  });
});
