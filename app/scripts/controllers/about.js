'use strict';

/**
 * @ngdoc function
 * @name bookExamplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bookExamplesApp
 */
angular.module('bookExamplesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
