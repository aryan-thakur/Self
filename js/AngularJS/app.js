var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      //controller: 'homeController',
      templateUrl: './home.html'
    })
    .when('/skills', {
     controller: 'skillController',
     templateUrl: './skill.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
