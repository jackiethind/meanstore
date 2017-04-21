var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .when('/customers', {
    templateUrl: 'partials/customers.html',
    controller: 'customersController'
  })
  .when('/products', {
    templateUrl: 'partials/products.html',
    controller: 'productsController'
  })
  .when('/orders', {
    templateUrl: 'partials/orders.html',
    controller: 'ordersController'
  })
  // .when('/delete/:id', {
  //   templateUrl: 'partials/delete.html',
  //   controller: 'deleteController'
  // })
  .otherwise({
    redirectTo: '/'
  })
})
