angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/authors', {
        controller:   'AuthorsController',
        controllerAs: 'vm',
        templateUrl:  'authors.controller.html'
      })
      .when('/authors/:authorId', {
        controller:   'AuthorsInfoController',
        controllerAs: 'vm',
        templateUrl:  'authors-info.controller.html'
      })
      .otherwise('/authors');

    $locationProvider.html5Mode(false);
  });
