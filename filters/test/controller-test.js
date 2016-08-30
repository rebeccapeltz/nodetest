'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

describe('testing controllers used in routing', function() {
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
    });
  });

  it('home controller should create a list of messages', () => {
    expect(this.homeController.messages.length > 0).toEqual(true);
    expect(this.homeController.messages.length).toEqual(3);
  });

});