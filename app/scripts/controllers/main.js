'use strict';

/**
 * @ngdoc function
 * @name obserbateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the obserbateApp
 */
angular.module('obserbateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
