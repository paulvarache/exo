angular.module('Angu02')

.controller('PhotoController', ['$scope', function ($scope) {
    $scope.photos = ['http://www.online-image-editor.com//styles/2014/images/example_image.png',
                'http://wowslider.com/sliders/demo-17/data1/images/street_cars_wallpaper_ferraristreetcarwallpaper.jpg',
                'http://www.keenthemes.com/preview/conquer/assets/plugins/jcrop/demos/demo_files/image2.jpg'];
}]);