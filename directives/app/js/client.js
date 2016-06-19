const angular = require('angular');

var FirstApp = angular.module('FirstApp', []);
require('./first')(FirstApp);

var IsolateApp = angular.module('IsolateApp', []);
require('./first')(IsolateApp);
