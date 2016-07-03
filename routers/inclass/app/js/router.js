'use strict';

module.exports = function(crudApp) {
  crudApp.config(['$routeProvider', function($route) {
    $route
      .when('/', {
        templateUrl: '/templates/partials/FirstApp.html'
      })
      .when('/list', {
        templateUrl: '/templates/partials/ListView.html',
        controller: 'ListController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
};
