'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:RestaurantController
 * @description
 * # RestaurantController
 */
angular.module('MyApp')
  .controller('RestaurantController', function($scope, $state, $ionicHistory, $ionicLoading, LocalStorageService) {
  	// For testing purpose
  	$scope.favoriteRestaurantList = [
	  	{
	  		'ID': 1,
	  		'restaurantName': 'First Restaurant',
	  		'restaurantType': 'Chinese'
	  	},
	  	{
	  		'ID': 2,
	  		'restaurantName': 'Second Restaurant',
	  		'restaurantType': 'Japanese'
	  	},
	  	{
	  		'ID': 3,
	  		'restaurantName': 'Third Restaurant',
	  		'restaurantType': 'Western'
	  	}
	  ];
  	$scope.allRestaurantList = [
  		{
	  		'ID': 1,
	  		'restaurantName': 'First Restaurant',
	  		'restaurantType': 'Chinese'
	  	},
	  	{
	  		'ID': 2,
	  		'restaurantName': 'Second Restaurant',
	  		'restaurantType': 'Japanese'
	  	},
	  	{
	  		'ID': 3,
	  		'restaurantName': 'Third Restaurant',
	  		'restaurantType': 'Western'
	  	}
  	];

  	$scope.show = function() {
	    $ionicLoading.show({
		      template: '<ion-spinner icon="lines" class="spinner-positive"></ion-spinner>' +
		      					'<br>' +
		      					'<span class="loading-text">Loading ...</span>',
		      duration: 500
		  });
	  };
	  $scope.hide = function(){
	    $ionicLoading.hide();
	  };

	  $scope.getRestaurantList = function() {
	  	$scope.show();
	  	$scope.$broadcast('scroll.refreshComplete');
	  };

	  $scope.goToDetailPage = function(index) {
	  	LocalStorageService.setObject('restaurantDetail', $scope.allRestaurantList[index]);
	  	LocalStorageService.set('restaurantDetailIndex', index);
	  	$state.go('app.detail');
	  };
  });