'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:DiningController
 * @description
 * # DiningController
 */
angular.module('MyApp')
  .controller('DiningController', function($scope, $state, $filter, LocalStorageService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.restaurant = LocalStorageService.getObject('restaurantDetail');
  		console.log($scope.diningDate);

  		$scope.diningDetail = {};
		});

		$scope.goToInfoPage = function() {
			$scope.diningDetail.totalPax = $scope.diningDetail.adultAmount + $scope.diningDetail.childAmount;
			$scope.diningDetail.bookedTimeslot = $scope.diningDetail.diningDate + " " + $scope.diningDetail.diningTime;
			
			LocalStorageService.setObject('diningDetail', $scope.diningDetail);
			$state.go('app.info');
		};

  });