app.controller('GroceryController', ['$scope', function($scope) {

    $scope.newItem;

    $scope.groceries = ['Cheese', 'Bread', 'Eggs', 'Milk', 'Oranges'];

    $scope.addItem = function() {
        $scope.groceries.push($scope.newItem);
        $scope.newItem = '';
    }

    $scope.removeItem = function(item) {
        var index = $scope.groceries.indexOf(item);
        $scope.groceries.splice(index, 1);
    }

}]);