'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:DiningController
 * @description
 * # DiningController
 */
angular.module('MyApp')
  .controller('DiningController', function($scope, $state, LocalStorageService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.restaurant = LocalStorageService.getObject('restaurantDetail');
		});

  });