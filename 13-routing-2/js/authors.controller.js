angular.module('myApp')
  .controller('AuthorsController', function(authors) {
    var vm = this;
    vm.authors = authors
  });
