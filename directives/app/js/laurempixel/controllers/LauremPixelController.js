module.exports = function(app) {
  app.controller('LauremPixelController', ['$scope', function() {
    this.url = 'http://lorempixel.com/400/400/food/',
    this.height = 400;
    this.width = 400;
    this.title = 'Food';
  }]);
};
