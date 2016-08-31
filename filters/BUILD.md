#### Build a table with filtering and sorting

#### built in filters



#### final 
##### Controller
``` JavasScript
'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.filter('amount', function() {
  return function(input) {
    return input > 500 ? 'large-amount' : 'normal-amount';
  };
});

demoApp.controller('StarterController', [function() {
  this.sortBy = 'name';
  this.reverse = false;

  this.customers = [
    { joined: '2016-11-11', name: 'Bob Jones', city: 'Portland', state: 'Or', orderTotal: 10.4567 },
    { joined: '2013-03-27', name: 'Barb Seals', city: 'San Francsico', state: 'Ca', orderTotal: 35.9999 },
    { joined: '1999-9-9', name: 'Sarah Bishop', city: 'Cleveland', state: 'Oh', orderTotal: 52.786 },
    { joined: '2005-04-25', name: 'Dave', city: 'Seattle', state: 'Wa', orderTotal: 1000.90 }
  ];
  this.doSort = function(propName) {
    this.sortBy = propName;
    this.reverse = !this.reverse;
  };
}]);

```

##### template
``` html
<h2>Customers Starter</h2> Filter: <input type="text" ng-model="starterController.customerFilter.name" />
<br /><br />
<table class="table">
  <tr>
    <th style="cursor:pointer" ng-click="starterController.doSort('name')">Name</th>
    <th style="cursor:pointer" ng-click="starterController.doSort('city')">City</th>
    <th style="cursor:pointer" ng-click="starterController.doSort('state')">State</th>
    <th style="cursor:pointer" ng-click="starterController.doSort('orderTotal')">Order Total</th>
    <th style="cursor:pointer" ng-click="starterController.doSort('joined')">Joined</th>
  </tr>

  <tr ng-repeat="cust in starterController.customers | filter:starterController.customerFilter | orderBy:starterController.sortBy:starterController.reverse">
    <td>{{ cust.name }}</td>
    <td>{{ cust.city }} </td>
    <td>{{ cust.state | uppercase}}</td>
    <td class="{{ cust.orderTotal | amount }}">{{ cust.orderTotal | currency }}</td>
    <td>{{ cust.joined | date }}</td>
  </tr>
</table>
<br />
<span>Total customers: {{ starterController.customers.length }}</span>
```


#### start
#### controller
``` JavaScript

```


``` html

```

#### 
