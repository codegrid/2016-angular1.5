angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        controller:   'HomeController',
        controllerAs: 'home',
        templateUrl:  'home.controller.html'
      })
      .otherwise('/home');

    $locationProvider.html5Mode(false);
  });
