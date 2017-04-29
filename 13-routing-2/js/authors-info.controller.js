angular.module('myApp')
  .controller('AuthorsInfoController', function($routeParams, authors) {
    var vm = this;

    vm.author = authors.find(function(author) {
      return author.id === parseInt($routeParams.authorId, 10);
    });
  });
