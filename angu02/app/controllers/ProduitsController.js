angular.module('Angu02')

.controller('ProduitsController', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://paulvarache.ninja:3000/api/products').success(function (data) {
        $scope.products = data.products;
    }).error();
}]);