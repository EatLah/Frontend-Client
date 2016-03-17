'use strict';

angular.module('MyApp')

// use factory for services
.factory('InfoService', function($http, LocalStorageService, ApiService) {
	var createReservation = function(reservation, callback) {
		$http({
      url: ApiService.getEndpoint() + '/item/items',
      method: 'GET',
      params: reservation
    }).success(function(data) {
      callback(data);
    });
	};

	var createCustomOrder = function(customOrder, callback) {
		$http({
      url: ApiService.getEndpoint() + '/item/items',
      method: 'GET',
      params: customOrder
    }).success(function(data) {
      callback(data);
    });
	};

	var createOrderItem = function(orderItem, callback) {
		$http({
      url: ApiService.getEndpoint() + '/item/items',
      method: 'GET',
      params: orderItem
    }).success(function(data) {
      callback(data);
    });
	};

	return {
		createReservation: createReservation,
		createCustomOrder: createCustomOrder
	};
});