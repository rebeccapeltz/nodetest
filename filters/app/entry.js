'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');
const angular_animate = require('angular-animate');

// angular modules
var app = angular.module('demoApp', [angular_route, angular_animate]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/filters', {
      template: require('./view/filters/filters.html'),
      controller: 'FilterController',
      controllerAs: 'hc'
    })
    .when('/orderby', {
      template: require('./view/orderby/orderby.html'),
      controller: 'OrderbyController',
      controllerAs: 'ob'
    })
    .when('/incontroller', {
      template: require('./view/filter_in_controller/filter_in_controller.html'),
      controller: 'FilterInController',
      controllerAs: 'fic'
    })
    .when('/starter', {
      template: require('./view/starter/starter.html'),
      controller: 'StarterController',
      controllerAs: 'starterController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

// angular components
require('./view/home');
require('./view/filter_in_controller');
require('./view/orderby');
require('./view/starter');
require('./view/filters');