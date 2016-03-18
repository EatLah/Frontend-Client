'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:RestaurantController
 * @description
 * # RestaurantController
 */
angular.module('MyApp')
  .controller('RestaurantController', function($scope, $state, $ionicHistory, $ionicLoading, LocalStorageService, RestaurantService) {

  	$scope.$on('$ionicView.enter', function() {
		  $scope.getRestaurantList();
		});

  	$scope.show = function() {
	    $ionicLoading.show({
		    templateUrl: 'templates/utils/load.html'
		  });
		  // console.log($scope.allRestaurantList);
	  };

	  $scope.hide = function(){
	    $ionicLoading.hide();
	  };

	  $scope.getRestaurantList = function() {
	  	$scope.show();
	  	RestaurantService.getAllRestaurants(function(data) {
	  		$scope.allRestaurantList = data;
	  		$scope.favoriteRestaurantList = data; // Not add favorite yet

	  		$scope.$broadcast('scroll.refreshComplete');

	  		setTimeout(function() {
	  			$scope.hide();
	  		}, 500);
	  	});
	  };

	  $scope.goToFavoriteRestaurantDetailPage = function(index) {
	  	LocalStorageService.setObject('restaurantDetail', $scope.favoriteRestaurantList[index]);
	  	$state.go('app.detail');
	  };

	  $scope.goToAllRestaurantDetailPage = function(index) {
	  	LocalStorageService.setObject('restaurantDetail', $scope.allRestaurantList[index]);
	  	$state.go('app.detail');
	  };
  });