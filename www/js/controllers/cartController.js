'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:CartController
 * @description
 * # CartController
 */
angular.module('MyApp')
  .controller('CartController', function($scope, $state, LocalStorageService) {
  	
  	$scope.$on('$ionicView.enter', function() {
  		$scope.cart = LocalStorageService.getObject('cart');
  		$scope.getTotalPrice();
		});

		$scope.getTotalPrice = function() {
			$scope.total = 0;
	    for (var i = 0; i < $scope.cart.length; i++){
	        var item = $scope.cart[i];
	        $scope.total += (item.menuItem.foodItemPrice * item.quantity);
	    }
		};

		$scope.removeItemFromCart = function(index) {
			$scope.cart.splice(index, 1);
			LocalStorageService.setObject('cart', $scope.cart);
			$scope.getTotalPrice();
		};

  });