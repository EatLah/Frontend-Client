'use strict';

angular.module('MyApp')

// use factory for services
.factory('RestaurantService', function($http, LocalStorageService, ApiService) {
  // var token = LocalStorageService.get('token');
  var getAllRestaurants = function(callback) {
    $http({
      url: ApiService.getEndpoint() + '/restaurant/restaurants',
      method: 'GET'
    }).success(function(data) {
      callback(data);
    });
  };

  var getRestaurantByID = function(restaurantID, callback) {
    $http({
      url: ApiService.getEndpoint() + '/restaurant/restaurant',
      method: 'GET',
      params: {restaurantID: restaurantID}
    }).success(function(data) {
      callback(data);
    });
  };

  // public api
  return {
    getAllRestaurants: getAllRestaurants,
    getRestaurantByID: getRestaurantByID
  };

});
