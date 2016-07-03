//require('../app/js/client');
const angular = require('angular');

require('angular-mocks');
require(__dirname + '/../app/js/client.js');

it('should map routes to controllers', function() {
  module('crudApp');

  inject(function($route) {

    expect($route.routes['/list'].controller).toBe('ListController');
    expect($route.routes['/list'].templateUrl).
    toEqual('/templates/partials/ListView.html');


    // otherwise redirect to
    expect($route.routes[null].redirectTo).toEqual('/')
  });
});
