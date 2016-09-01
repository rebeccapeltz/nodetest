'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

describe('testing filter', function() {
  beforeEach(function() {
    angular.mock.module('demoApp');
    angular.mock.inject(($filter) => {
      this.$filter = $filter;
      this.filter = $filter('amount');

    });
  });

  it('should load the filter', function() {
    expect(this.filter).toBeDefined();
    expect(this.filter(1000)).toEqual('large-amount');
    expect(this.filter(500)).toEqual('normal-amount');
  });
});