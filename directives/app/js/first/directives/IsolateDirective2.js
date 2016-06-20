module.exports = function(app) {
  app.directive('isolateDirective2', function() {
    return {
      restrict: 'A',
      templateUrl: './templates/Isolate/IsolateTemplate2.html',
      scope: {
        authLastname: '@lastname', //this is for already evaluated to a string
        authFirstname: '=firstname'  //this is for 2 way binding
      }
    };

  });
};
