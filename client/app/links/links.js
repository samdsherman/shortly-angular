angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  // Your code here
  $scope.data = {};
  Links.getAll()
  .then(function(links) {
    $scope.data.links = links;
  });
  $scope.navToShorten = function() {
    $location.url('/shorten');
  };
});
