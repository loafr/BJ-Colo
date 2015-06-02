var app = angular.module('coloApp', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
  .when('/', {
  	templateUrl: 'templates/home.html',
  	controller: 'MainCtrl'
  })
  .when('/Rules/', {
  	templateUrl: 'templates/rules.html',
  	controller: 'MainCtrl'
  })
  .otherwise ({
  	redirectTo: '/'
  })


});