var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .when('/poll/:id', {
    templateUrl: 'partials/poll.html',
    controller: 'pollController'
  })
  .when('/createPoll', {
    templateUrl: 'partials/newPoll.html',
    controller: 'newController'
  })

  .otherwise({
    redirectTo: '/'
  })
})
