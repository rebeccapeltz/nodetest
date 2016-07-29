'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//1st define schema
const customerSchema = new Schema({
  name: String,
  active: Boolean,
  year_added: Number
});

//Customer is the model
var Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
