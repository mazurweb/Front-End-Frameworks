/**
 * Created by mikemaz2005 on 11/13/15.
 */

angular.module("myApp").service("DataService", function(){

    // Grocery Data Service Section

    var groceriesArray = ["Milk", "Cheese", "Eggs", "Bread"];


    this.getGroceries = function() {

        groceriesArray = JSON.parse(localStorage.getItem("GroceryList"))  || groceriesArray;
        return groceriesArray;
    }

    this.newGrocery = function(grocery) {

        groceriesArray.push(grocery);
        localStorage.setItem("GroceryList", JSON.stringify(groceriesArray));
    }

    this.removeGrocery = function(grocery) {
        groceriesArray.splice(grocery, 1);
        localStorage.setItem("GroceryList", JSON.stringify(groceriesArray));
    }

    // ToDo List

    var todoArray = ["Wash my car", "Go grocery shopping", "Wash the dishes"];

    this.getTODO = function() {

        todoArray = JSON.parse(localStorage.getItem("ToDoList")) || todoArray;
        return todoArray;
    }

    this.newTODO = function(todo) {
        todoArray.push(todo);
        localStorage.setItem("ToDoList", JSON.stringify(todoArray));
    }

    this.removeTODO = function(todo) {
        todoArray.splice(todo, 1);
        localStorage.setItem("ToDoList", JSON.stringify(todoArray));
    }


    // Address Data Service Section

    var addressArray = [];

    this.getAddresses = function(){
        var addArray = JSON.parse(localStorage.getItem("addresses")) || [];
        addressArray = addArray;
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