'use strict';

/**
 * @ngdoc function
 * @name bookExamplesApp.controller:HelloCtrl
 * @description
 * # HelloCtrl
 * Controller of the bookExamplesApp
 */
angular.module('bookExamplesApp')
  .controller('HelloCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
