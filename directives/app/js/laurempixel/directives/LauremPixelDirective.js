module.exports = function(app) {
  app.directive('lauremPixel', function() {
    return {
      restrict: 'E',
      //template: '',
      templateUrl: './templates/LauremPixel/LauremPixelTemplate.html',
      scope: {
        url: '@',
        height: '@',
        width: '@',
        title: '@'
      }
    };

  });
};
