'use strict';

/**
 * @ngdoc function
 * @name bookExamplesApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the bookExamplesApp
 */
var model = {
    user: "Adam"
};

var todoApp = angular.module("bookExamplesApp");

todoApp.run(function ($http) {
    $http.get("todo.json").success(function (data) {
       model.items = data;
    });
});

todoApp.controller('TodoCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.todo = model;

    $scope.incompleteCount = function(){
        var count = 0;
        angular.forEach($scope.todo.items, function(item){
            if(!item.done) {count++}
        })
        return count;
    }

    $scope.warningLevel = function(){
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    }

    $scope.addNewItem = function(actionText){
        $scope.todo.items.push({action:actionText, done:false})
    }
});

todoApp.filter("checkedItems", function () {
    return function (items, showComplete){
        var resultArray = []
        angular.forEach(items, function(item){
            if (item.done == false || showComplete == true){
                resultArray.push(item);
            }
        });
        return resultArray;
    }
})