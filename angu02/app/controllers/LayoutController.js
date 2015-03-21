angular.module('Angu02')

.controller('LayoutController', ["$scope", function ($scope) {
    $scope.links = [{
        name: "Acceuil",
        url: "#/"
    },
    {
        name: "Photo",
        url: "#/photo"
    },
    {
        name: "Contact",
        url: "#/contact"
    }]
}]);