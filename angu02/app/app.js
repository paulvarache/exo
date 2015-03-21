angular.module('Angu02', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/templates/accueil.html',
            controller: "AccueilController"
        })
        .when('/photo', {
            templateUrl: 'app/templates/photo.html',
            controller: 'PhotoController'
        })
        .when('/produits', {
            templateUrl: 'app/templates/produits.html',
            controller: "ProduitsController"
        })
        .when('/contact', {
            templateUrl: 'app/templates/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);