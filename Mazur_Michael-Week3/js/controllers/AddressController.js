/**
 * Created by mikemaz2005 on 11/13/15.
 */

app.controller('AddressController', function($scope, DataService) {

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
