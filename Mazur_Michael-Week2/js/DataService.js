/**
 * Created by Mikemaz2005 on 11/6/2015.
 */
angular.module("myApp").service("DataService", function(){

    var addressArray = [];

    this.getAddresses = function(){
        var addArray = JSON.parse(localStorage.getItem("addresses")) || [];
        addressArray = addArray;
            console.log(addArray);
        return addressArray;
    }

    this.saveAddress = function(eName, eAddress, eCity, eState, eZip){
        var savedAddresses = {name: eName, address: eAddress, city: eCity, state: eState, zip: eZip};

        addressArray.push(savedAddresses);
        localStorage.setItem("addresses", JSON.stringify(addressArray));
    }

    this.removeAddressAt = function(eIndex){
        addressArray.splice(eIndex, 1);
        localStorage.setItem("addresses", JSON.stringify(addressArray));
    }

    this.destroyLocalStorage = function() {
        addressArray.splice(0);
        localStorage.clear();
    }
});