'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('StarterController', [function() {

  this.customers = [
    { orderDate: '2016-11-11', name: 'Bob Jones', city: 'Portland', state: 'Or', orderTotal: 10.4567 },
    { orderDate: '2013-03-27', name: 'Barb Seals', city: 'San Francsico', state: 'Ca', orderTotal: 35.9999 },
    { orderDate: '1999-09-09', name: 'Sarah Bishop', city: 'Cleveland', state: 'Oh', orderTotal: 52.786 },
    { orderDate: '2005-04-25', name: 'Dave Johnson', city: 'Seattle', state: 'Wa', orderTotal: 1000.90 }
  ];

  this.totalOrderAmount = function() {
    return this.customers.map(function(order) {
      return order.orderTotal;
    }).
    reduce(function(prev, current) {
      return prev + current;
    });
  };
}]);