require('angular');
require('angular-route');
var angular = window.angular;

var crudApp = angular.module('crudApp', ['ngRoute']);

require('./first')(crudApp);
require('./first/services')(crudApp);
require('./router')(crudApp);
