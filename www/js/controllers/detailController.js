'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:DetailController
 * @description
 * # DetailController
 */
angular.module('MyApp')
  .controller('DetailController', function($scope, $state, $ionicHistory, LocalStorageService) {

  	$scope.$on('$ionicView.enter', function() {
		  $scope.selectedRestaurant = LocalStorageService.getObject('restaurantDetail');
		  $scope.selectedRestaurantIndex = LocalStorageService.get('restaurantDetailIndex', -1);
		  $scope.getRestaurant();
		});

		$scope.getRestaurant = function() {

		};
   
  });