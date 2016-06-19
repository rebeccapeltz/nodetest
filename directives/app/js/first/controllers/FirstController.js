module.exports = function(app) {
  app.controller('FirstController', ['$scope', function() {
    this.firstname = 'Becky';
    this.lastname = 'Peltz';
    this.address = 'Seattle, WA';
    this.fullname = function() {
      alert(this.firstname + ' ' + this.lastname);
    };
  }]);
};
