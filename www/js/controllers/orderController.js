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
		});

  	$scope.orderItemQuantity = 1;
  	$scope.orderItemSpecialRequests = '';

  	$scope.decreaseOneQuantity = function() {
  		$scope.orderItemQuantity --;
  	};

  	$scope.increaseOneQuantity = function() {
  		$scope.orderItemQuantity ++;
  	};

  	$scope.addToCart = function() {
  		$scope.orderItem = {
  			orderItemID: null,

  		};
  	};

  });