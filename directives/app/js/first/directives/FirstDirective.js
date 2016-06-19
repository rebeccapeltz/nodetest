module.exports = function(app) {
  app.directive('firstDirective', function() {
    return {
      restrict: 'EAC',
      transclude: true,
      //replace: false, //use must use this if you don't wrap your template in a div
      //template: '<div><h1>First Directive {{titleDisplay}}</h1><h2>{{url}}</h2></div>'
      //template: '<h1>First Directive {{titleDisplay}}</h1><h2>{{url}}</h2>',
      //template: '<h1>First Directive</h1><h2>First Directive</h2>'
      template: '<h1>First Directive</h1><ng-transclude></ng-transclude>'
      //templateUrl: './templates/FirstApp/FirstApp.html'
      //scope: {
      //  url: '@', //this is for already evaluated
      //  titleDisplay: '=title'  //this is for needing evaluation
      //}
    };

  });
};
