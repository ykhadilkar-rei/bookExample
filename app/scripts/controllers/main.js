'use strict';

/**
 * @ngdoc function
 * @name bookExamplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookExamplesApp
 */
angular.module('bookExamplesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
