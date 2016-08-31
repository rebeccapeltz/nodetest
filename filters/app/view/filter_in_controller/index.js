'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');


demoApp.controller('FilterInController', ['$filter', '$scope', function($filter, $scope) {
  //$scope.search = {};
  $scope.users = [{ name: 'John', phone: '555-1276', secret: 'shhh' },
    { name: 'Larry', phone: '800-555-5555', secret: 'psst' },
    { name: 'Mike', phone: '555-4321', secret: 'hush' },
    { name: 'Mary', phone: '555-5678', secret: 'blah' },
    { name: 'Julie', phone: '555-8765', secret: 'shhh' }
  ];




  $scope.usersOrdered = $filter('orderBy')($scope.users, 'name');



}]);