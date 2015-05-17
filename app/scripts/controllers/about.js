'use strict';

/**
 * @ngdoc function
 * @name obserbateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the obserbateApp
 */
angular.module('obserbateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
