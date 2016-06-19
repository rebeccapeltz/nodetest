module.exports = function(app) {
  app.directive('isolateDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/Isolate/IsolateTemplate.html',
      scope: {
        firstname: '@', //this is for already evaluated to a string
        lastname: '=',  //this is for 2 way binding
        fullname: '&',  //behavior function
        address: '='
      }
    };

  });
};
