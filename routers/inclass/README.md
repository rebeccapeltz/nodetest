#### Adding Routers

###### client.js
``` JavaScript
require('angular');
require('angular-route');
var angular = window.angular;

var crudApp = angular.module('crudApp', ['ngRoute']);

require('./first')(crudApp);
require('./first/services')(crudApp);
require('./router')(crudApp);

```

###### ListController.js
``` JavaScript
module.exports = function(app) {
  app.controller('ListController', ['$scope','services', function($scope, services) {
    $scope.customers = services.getCustomers();
    this.firstname = '';
    this.lastname = '';
    this.zipcode = '';
  }]);
};

```

###### Service.js
 Crud on an array
``` JavaScript
module.exports = function(app) {
  app.factory('services', [ function() {
    var customers = [{
      customerNumber: 1,
      firstname:'George',
      lastname:'Washington',
      zipcode:'98101'
    }];

    var obj = {};
    obj.getCustomers = function() {
      return customers;

    };

    obj.getCustomer = function(customerID) {
      var arr;
      arr = customers.filter(function(item) {
        return item.customerNumber == customerID;
      });
      return arr[0];
    };

    obj.insertCustomer = function(customer) {
      var id = -1;
      customers.map(function(item) {
        if (item.customerNumber > id) id = item.customerNumber;
      });
      customer.customerNumber = ++id; //get new id
      customers.push(customer);
      return customer;
    };

    obj.updateCustomer = function(id, customer) {
      var existingCustomer = obj.getCustomer(id);
      for (var key in customer) {
        existingCustomer[key] = customer[key];
      }
      return customer;
    };

    obj.deleteCustomer = function(id) {
      var index = customers.indexOf(obj.getCustomer(id));
      customers.splice(index, 1);
    };

    return obj;
  }]);
};

```
###### Router config
``` JavaScript
'use strict';

module.exports = function(crudApp) {
  crudApp.config(['$routeProvider', function($route) {
    $route
      .when('/', {
        templateUrl: '/templates/partials/FirstApp.html'
      })
      .when('/list', {
        templateUrl: '/templates/partials/ListView.html',
        controller: 'ListController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
};

```
###### List template

``` html
<h1>Customers</h1>
<div class="container">

  <div class="row">
    <div class="twelve column">
      <table class="u-full-width">
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Zipcode</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr ng-repeat="data in customers">
            <td>{{data.firstname}}</td>
            <td>{{data.lastname}}</td>
            <td>{{data.zipcode}}</td>
            <td><a href="#/edit-customer/{{data.customerNumber}}" class="btn">&nbsp;Edit Customer</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

```
