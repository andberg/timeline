'use strict';

/**
 * @ngdoc overview
 * @name timelineApp
 * @description
 * # timelineApp
 *
 * Main module of the application.
 */
angular
  .module('timelineApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });