'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Customer = require('../model/customer'); //model

const customerRouter = module.exports = exports = express.Router();

//POST
customerRouter.post('/', jsonParser, (req, res, next) => {
  //req.body
  //TODO error checking that req.body has all fields
  let newCustomer = new Customer(req.body);
  newCustomer.save((err, customer) => {
    if (err) return next(err);
    res.json(customer); //send to client
  });
});


//GET ALL
customerRouter.get('/', (req, res, next) => {
  Customer.find({}, (err, customers) => {
    if (err) return next(err);
    res.json(customers); //return all customers if there are any
  });
});



//GET ONE /api/customer/fjka;fj;fj
customerRouter.get('/:id', (req, res, next) => {
  let _id = req.params.id;
  Customer.findOne({
    _id
  }, (err, customer) => {
    if (err) return next(err);
    res.json(customer);
  });


});

//PUT  //findOneandUpdate  {"year": 2017}
customerRouter.put('/:id', jsonParser, (req, res, next) => {
  Customer.findOneAndUpdate({
    '_id': req.params.id
  }, req.body, (err) => {
    if (err) return next(err);
    res.json({
      message: 'success'
    });
  });
});




//DELETE
customerRouter.delete('/:id', (req,res,next)=>{
  let _id = req.params.id;
  Customer.findOneAndRemove({_id}, (err)=>{
    if (err) return next(err);
    res.json({
      message: 'success'
    });
  });
});
