'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

beforeEach(() => {
  angular.mock.module('demoApp');
  angular.mock.inject(($controller, $filter) => {
    console.log($filter);
    this.listCtrl = new $controller('OrderbyController');
    this.filter = $filter('amount');

  });
});
describe('testing filter', function() {

  it('should load the filter', function() {
    expect(this.filter).toBeDefined();
  });
});

// describe('testing controllers used in routing', function() {
//   beforeEach(() => {
//     angular.mock.module('demoApp');
//     angular.mock.inject(($controller) => {
//       this.homeController = new $controller('HomeController');
//     });
//   });

//   it('home controller should create a list of messages', () => {
//     expect(this.homeController.messages.length > 0).toEqual(true);
//     expect(this.homeController.messages.length).toEqual(3);
//   });

//});