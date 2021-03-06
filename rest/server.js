'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const customerRouter = require(__dirname + '/route/customer-router.js');

const LOCAL_DB_SERVER = 'mongodb://localhost/dev_db';
const DB_SERVER = process.env.DB_SERVER || LOCAL_DB_SERVER;

//TODO handle different database for testing
//DONT forget to run mongod
mongoose.connect(DB_SERVER);

app.use('/api/customer', customerRouter);

// handle 500
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
  next(err);
});

// handle 404
app.use((req, res) => {
  let message = 'route not found';
  res.status(404).json({
    message
  });
});


// module.exports = app.listen(3000, () => {
//   console.log('up on 3000');
// });
module.exports = app;
