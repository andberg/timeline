'use strict';

/**
 * @ngdoc function
 * @name timelineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timelineApp
 */
angular.module('timelineApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
