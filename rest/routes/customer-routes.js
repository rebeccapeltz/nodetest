'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();  //need the json functionality of the body parser
const Customer = require('../models/customer');   //model

const customerRouter = module.exports = exports = express.Router();

//GET returns a list of 0 or more or error
customerRouter.get('/', (req, res, next) => {
  Customer.find({}, (err, customers) => {   //mongoose find
    if(err) return next(err);
    res.json(customers);  //return customers as json
  });
});

//POST returns the posted object with an id or error
customerRouter.post('/', jsonParser, (req, res, next) => {
  let newCustomer = new Customer(req.body);
  newCustomer.save((err, customer) => {   //save on the instance
    if(err) return next(err);
    res.json(customer);  //customer has an _id now
  });
});

//PUT returns success or error
customerRouter.put('/', jsonParser, (req, res, next) => {
  let _id = req.body._id;  //existing object has an id
  Customer.findOneAndUpdate({_id}, req.body, (err) => {
    if(err) return next(err);
    let message = 'success';
    res.json({message});  //return success
  });
});

//PUT returns success or error
customerRouter.delete('/:id', (req, res, next) => {
  let _id = req.params.id;
  Customer.findOneAndRemove({_id}, (err) => {
    if(err) return next(err);
    let message = 'success';
    res.json({message});
  });
});
