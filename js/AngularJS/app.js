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
    .when('/projects', {
     controller: 'projectController',
     templateUrl: './project.html'
    })
    .when('/newsboard', {
     controller: 'newsController',
     templateUrl: './news.html'
    })
    .when('/project/:id', {
     //controller: 'projectdisplayController',
     templateUrl: './projectdisplay.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
