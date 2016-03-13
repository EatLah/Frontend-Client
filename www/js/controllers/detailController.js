'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:DetailController
 * @description
 * # DetailController
 */
angular.module('MyApp')
  .controller('DetailController', function($scope, $state, $ionicLoading, $ionicHistory, LocalStorageService) {

  	$scope.$on('$ionicView.enter', function() {
		  $scope.selectedRestaurant = LocalStorageService.getObject('restaurantDetail');
		  $scope.selectedRestaurantIndex = LocalStorageService.get('restaurantDetailIndex', -1);
		  $scope.getRestaurant();
		});

		$scope.show = function() {
	    $ionicLoading.show({
		    templateUrl: 'templates/utils/load.html',
		    duration: 500
		  });
	  };

		$scope.getRestaurant = function() {
			$scope.show();
			$scope.$broadcast('scroll.refreshComplete');
		};
   
  });