/**
 * Created by mikemaz2005 on 11/13/15.
 */

angular.module('myApp', ['ngRoute'])

    .config(function($routeProvider){

        $routeProvider.when('/grocery/:groceryParam', {
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

    })

    // Grocery Controller
    .controller('GroceryController', function($scope,$routeParams,DataService){

        $scope.groceryItem;

        $scope.word = $routeParams.groceryParam;


        /*GET GAME ARRAY BY CALLING DATASERVICE*/
        $scope.groceriesArray = DataService.getGroceries();


        /*ADD GAME FUNCTION BY CALLING DATASERVICE*/
        $scope.addGrocery = function() {
            DataService.newGrocery($scope.groceryItem);

            $scope.groceryItem = '';
        }



        $scope.deleteGrocery = function(groceryToDelete) {
            DataService.removeGrocery(groceryToDelete);
        }


    // Address Controller

    .controller('AddressController', function($scope, DataService) {

        $scope.addresses = DataService.getAddresses();

        $scope.newAddress = {};

        $scope.addNewAddress= function() {
            DataService.saveAddress($scope.newAddress.name, $scope.newAddress.street, $scope.newAddress.city, $scope.newAddress.state, $scope.newAddress.zipCode);
            $scope.newAddress = {};
        }

        $scope.removeAddress = function(address) {
            DataService.removeAddressAt(address);
        }

        $scope.clearIt = function(){
            DataService.destroyLocalStorage();
        }
    });