'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:DetailController
 * @description
 * # DetailController
 */
angular.module('MyApp')
  .controller('DetailController', function($scope, $state, $ionicLoading, $ionicHistory, LocalStorageService, RestaurantService) {

  	$scope.$on('$ionicView.enter', function() {
		  $scope.selectedRestaurant = LocalStorageService.getObject('restaurantDetail');
		});

		$scope.show = function() {
	    $ionicLoading.show({
		    templateUrl: 'templates/utils/load.html'
		  });
	  };

	  $scope.hide = function(){
	    $ionicLoading.hide();
	  };

		$scope.getRestaurant = function() {
			$scope.show();
			RestaurantService.getRestaurantByID($scope.selectedRestaurant.ID, function(data) {
				$scope.selectedRestaurant = data;
				$scope.$broadcast('scroll.refreshComplete');

				setTimeout(function() {
	  			$scope.hide();
	  		}, 500);
			});
		};
  	
  	$scope.goToMenuCategoryPage = function() {
  		$state.go('app.menu');
  	};
  });