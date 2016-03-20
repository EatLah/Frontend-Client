'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:OrderController
 * @description
 * # OrderController
 */
angular.module('MyApp')
  .controller('OrderController', function($scope, $state, $ionicHistory, LocalStorageService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.menuItem = LocalStorageService.getObject('menuItem');
      $scope.orderItem = {};
      $scope.orderItem.orderItemQuantity = 1;
		});

  	$scope.decreaseOneQuantity = function() {
  		if ($scope.orderItem.orderItemQuantity > 1) {
        $scope.orderItem.orderItemQuantity --;
      }
  	};

  	$scope.increaseOneQuantity = function() {
  		$scope.orderItem.orderItemQuantity ++;
  	};

  	$scope.addToCart = function() {
  		$scope.orderItem.menuItem = $scope.menuItem;
  		$scope.orderItem.totalPrice = $scope.orderItem.orderItemQuantity * $scope.menuItem.foodItemPrice;

      $scope.cart = LocalStorageService.getObject('cart');
      $scope.cart.push($scope.orderItem);
      LocalStorageService.setObject('cart', $scope.cart);

      $state.go('app.menu');
  	};

  });