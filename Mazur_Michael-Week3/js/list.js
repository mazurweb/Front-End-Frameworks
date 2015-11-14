/**
 * Created by mikemaz2005 on 11/13/15.
 */

var app = angular.module('myApp', ['ngRoute']);

    .config(function($routeProvider){

        $routeProvider.when('/grocery', {
            templateUrl : "grocery-list.html",
            controller : "GroceryController"
        }).when('/todo', {
            templateUrl : "todo-list.html",
            controller : "TODOController"
        }).when('/address', {
            templateUrl : "address-book.html",
            controller : "AddressController"
        }).otherwise({
           redirectTo : "/grocery"
        });

    });