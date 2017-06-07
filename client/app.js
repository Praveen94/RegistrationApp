var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when('/',{
templateUrl:'./views/register.html',
controller:'RegisterController'

  });
});
