//Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routes
weatherApp.config(function ($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  .when('/forecast', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastController'
  })

});

//Controllers
weatherApp.controller('homeController', ['$scope', function($scope) {

}]);

weatherApp.controller('forecastController', ['$scope', function($scope){

}]);

