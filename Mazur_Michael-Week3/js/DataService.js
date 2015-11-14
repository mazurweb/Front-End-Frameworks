/**
 * Created by mikemaz2005 on 11/13/15.
 */

angular.module("myApp").service("DataService", function(){

    // Grocery Data Service Section

    var groceriesArray = ["Milk", "Cheese", "Eggs", "Bread"];


    this.getGroceries = function() {
        var str = localStorage.getItem("GroceryList");
        groceriesArray = JSON.parse(str)  || groceriesArray;
        return groceriesArray;
    }

    this.newGrocery = function(grocery) {
        var newGrocery = grocery;

        groceriesArray.push(newGrocery);
        var str = JSON.stringify(groceriesArray);
        localStorage.setItem("GroceryList", str);
    }

    this.removeGrocery = function(grocery) {
        groceriesArray.splice(groceriesArray.indexOf(grocery), 1);
        var str = JSON.stringify(groceriesArray);
        localStorage.setItem("GroceryList", str);
    }




    // Address Data Service Section

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