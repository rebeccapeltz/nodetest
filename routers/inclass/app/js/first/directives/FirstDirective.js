module.exports = function(app) {
  app.directive('firstDirective', function() {
    return {
      templateUrl: './templates/FirstApp/FirstApp.html'
    };

  });
};
