module.exports = function(app) {
  app.controller('ListController', ['$scope','services', function($scope, services) {
    $scope.customers = services.getCustomers();
    this.firstname = '';
    this.lastname = '';
    this.zipcode = '';
  }]);
};
