'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:RestaurantController
 * @description
 * # RestaurantController
 */
angular.module('MyApp')
  .controller('RestaurantController', function($scope, $state, $ionicHistory) {
  	$scope.favoriteRestaurantList = ['TEST 1', 'TEST 2', 'TEST 3'];
  	$scope.nearbyRestaurantList = ['TEST 4', 'TEST 5', 'TEST 6'];
  });