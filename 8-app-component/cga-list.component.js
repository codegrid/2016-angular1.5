angular.module('cga')
  .component('cgaList', {
    templateUrl: './cga-list.component.html',
    controller: function CgaListCtrl($http) {
      var vm = this;

      vm.authorSelect = function(id) {
        vm.selectedAuthor = vm.authors.filter(function(author) {
          return author._id === id;
        })[0];
      };

      vm.$onInit = function() {
        vm.selectedAuthor = null;

        $http
          .get('./authors.json')
          .then(function(res) {
            vm.authors = res.data;
          });
      }
    }
  });
