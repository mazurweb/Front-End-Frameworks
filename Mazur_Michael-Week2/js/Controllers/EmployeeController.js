/**
 * Created by mmazur on 11/6/2015.
 */

app.controller('EmployeeController', function($scope, DataService) {

    $scope.addresses = DataService.getAddresses();

    $scope.newAddress = {};

    $scope.addNewAddress= function() {
        DataService.saveAddress($scope.newAddress.company, $scope.newAddress.street, $scope.newAddress.city, $scope.newAddress.state, $scope.newAddress.zipCode);
        $scope.newAddress = {};
    }

    $scope.removeAddress = function(address) {
       DataService.removeAddressAt(address);
    }

    $scope.clearIt = function(){
        DataService.destroyLocalStorage();
    }
});