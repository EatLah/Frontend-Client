'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:MenuController
 * @description
 * # MenuController
 */
angular.module('MyApp')
  .controller('MenuController', function($scope, $state, $ionicLoading, LocalStorageService, MenuService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.selectedRestaurant = LocalStorageService.getObject('restaurantDetail');
		  $scope.getMenuCategories($scope.selectedRestaurant.ID);

		  LocalStorageService.setObject('cart', []);
		});

  	$scope.show = function() {
	    $ionicLoading.show({
		    templateUrl: 'templates/utils/load.html'
		  });
	  };

	  $scope.hide = function(){
	    $ionicLoading.hide();
	  };

	  $scope.getMenuCategories = function(restaurantID) {
	  	$scope.show();
			MenuService.getMenuCategoriesByRestaurantID($scope.selectedRestaurant.ID, function(data) {
				$scope.menuCategories = data;
				$scope.$broadcast('scroll.refreshComplete');

				setTimeout(function() {
	  			$scope.hide();
	  		}, 500);
			});
	  };

	  $scope.goToMenuCategoryItemPage = function(index) {
	  	LocalStorageService.setObject('menuCategory', $scope.menuCategories[index]);
	  	$state.go('app.item');
	  };

  });