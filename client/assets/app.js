var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .when('/askquestion', {
    templateUrl: 'partials/askquestion.html',
    controller: 'questionsController'
  })
  .when('/showquestion/:id', {
    templateUrl: 'partials/showquestion.html',
    controller: 'showController'
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
