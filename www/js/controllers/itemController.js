'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:ItemController
 * @description
 * # ItemController
 */
angular.module('MyApp')
  .controller('ItemController', function($scope, $state, $ionicLoading, LocalStorageService, ItemService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.selectedRestaurant = LocalStorageService.getObject('restaurantDetail');
  		$scope.menuCategory = LocalStorageService.getObject('menuCategory');
  		$scope.getMenuItems();
		});

  	$scope.show = function() {
	    $ionicLoading.show({
		    templateUrl: 'templates/utils/load.html'
		  });
	  };

	  $scope.hide = function(){
	    $ionicLoading.hide();
	  };

	  $scope.getMenuItems = function() {
	  	$scope.show();
			ItemService.getItemsByRestaurantIDCategoryID($scope.selectedRestaurant.ID, $scope.menuCategory.categoryID, function(data) {
				$scope.menuItems = data;
				$scope.$broadcast('scroll.refreshComplete');

				setTimeout(function() {
	  			$scope.hide();
	  		}, 500);
			});
	  };

  });