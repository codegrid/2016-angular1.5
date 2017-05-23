(function() {

var app = angular.module('myApp', []);

app.value('members', [
  { "name": "Kyosuke Nakamura", "job": "President" },
  { "name": "Yota Uno", "job": "Engineer" },
  { "name": "Natsuko Sotomura", "job": "Editor" },
  { "name": "Kazunori Tokuda", "job": "Director" }
]);

app.controller('MainCtrl', function(members) {
  var vm = this;
  vm.members = members;

  vm.addMember = function() {
    vm.members.push({ name: vm.newName });
    vm.newName = '';
  };
});

})();
