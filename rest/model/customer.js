'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: String,
  active: Boolean,
  year_added: Number
});
var Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer; //returning a model

//var Blog = mongoose.model('Blog', blogSchema);
