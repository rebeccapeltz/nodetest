'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('HomeController', [function() {
  this.messages = ['hello', 'hello', 'hello'];
}]);