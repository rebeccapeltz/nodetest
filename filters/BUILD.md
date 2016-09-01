#### Build a table with filtering and sorting

#### built in filters
https://docs.angularjs.org/api/ng/filter


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

demoApp.controller('OrderbyController', [function() {
  this.sortCol = 'name';
  this.toggleReverse = false;

  this.customers = [
    { orderDate: '2016-11-11', name: 'Bob Jones', city: 'Portland', state: 'Or', orderTotal: 10.4567 },
    { orderDate: '2013-03-27', name: 'Barb Seals', city: 'San Francsico', state: 'Ca', orderTotal: 35.9999 },
    { orderDate: '1999-09-09', name: 'Sarah Bishop', city: 'Cleveland', state: 'Oh', orderTotal: 52.786 },
    { orderDate: '2005-04-25', name: 'Dave Johnson', city: 'Seattle', state: 'Wa', orderTotal: 1000.90 }
  ];
  this.doSort = function(colName) {
    this.sortCol = colName;
    this.toggleReverse = !this.toggleReverse;
  };

  this.totalOrderAmount = function() {
    return this.customers.map(function(order) {
      return order.orderTotal;
    }).
    reduce(function(prev, current) {
      return prev + current;
    });
  };
}]);
```

##### template final
``` html
<h2>Customers</h2> Filter: <input type="text" ng-model="ob.customerFilter.name" />
<br /><br />
<table class="table">
  <tr>
    <th style="cursor:pointer" ng-click="ob.doSort('name')">Name</th>
    <th style="cursor:pointer" ng-click="ob.doSort('city')">City</th>
    <th style="cursor:pointer" ng-click="ob.doSort('state')">State</th>
    <th style="cursor:pointer" ng-click="ob.doSort('orderTotal')">Order Total</th>
    <th style="cursor:pointer" ng-click="ob.doSort('orderDate')">Order Date</th>
  </tr>

  <tr class="animate-repeat" ng-repeat="cust in ob.customers | filter:ob.customerFilter | orderBy:ob.sortCol:ob.toggleReverse">
    <td>{{ cust.name }}</td>
    <td>{{ cust.city }} </td>
    <td>{{ cust.state | uppercase}}</td>
    <td class="{{ cust.orderTotal | amount }}">{{ cust.orderTotal | currency }}</td>
    <td>{{ cust.orderDate | date }}</td>
  </tr>
</table>
<br />
<span>Total customers: {{ ob.customers.length }}</span>
<br />
<span>Total order amount: {{ ob.totalOrderAmount() |currency }}</span>
```


#### start
#### controller
``` JavaScript
'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('StarterController', [function() {

  this.customers = [
    { orderDate: '2016-11-11', name: 'Bob Jones', city: 'Portland', state: 'Or', orderTotal: 10.4567 },
    { orderDate: '2013-03-27', name: 'Barb Seals', city: 'San Francsico', state: 'Ca', orderTotal: 35.9999 },
    { orderDate: '1999-09-09', name: 'Sarah Bishop', city: 'Cleveland', state: 'Oh', orderTotal: 52.786 },
    { orderDate: '2005-04-25', name: 'Dave Johnson', city: 'Seattle', state: 'Wa', orderTotal: 1000.90 }
  ];

  this.totalOrderAmount = function() {
    return this.customers.map(function(order) {
      return order.orderTotal;
    }).
    reduce(function(prev, current) {
      return prev + current;
    });
  };
}]);

```


``` html
<h2>Customers Starter</h2> Filter: <input type="text" />
<br /><br />
<table>
  <tr>
    <th>Name</th>
    <th>City</th>
    <th>State</th>
    <th>Order Total</th>
    <th>Order Date</th>
  </tr>

  <tr ng-repeat="cust in starterController.customers">
    <td>{{ cust.name }}</td>
    <td>{{ cust.city }} </td>
    <td>{{ cust.state }}</td>
    <td>{{ cust.orderTotal }}</td>
    <td>{{ cust.orderDate }}</td>
  </tr>
</table>
<br />
<span>Total customers: {{ starterController.customers.length }}</span>
<br />
<span>Total order amount: {{ starterController.totalOrderAmount() }}</span>

```

#### 
