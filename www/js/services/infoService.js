'use strict';

angular.module('MyApp')

// use factory for services
.factory('InfoService', function($http, LocalStorageService, ApiService) {
	var createReservation = function(reservation, callback) {
		$http({
      url: ApiService.getEndpoint() + '/reservation/create',
      method: 'POST',
      data: reservation
    }).success(function(data) {
      callback(data);
    });
	};

	var createCustomOrder = function(customOrder, callback) {
		$http({
      url: ApiService.getEndpoint() + '/customOrder/create',
      method: 'POST',
      data: customOrder
    }).success(function(data) {
      callback(data);
    });
	};

	var createOrderItem = function(orderItem, callback) {
		$http({
      url: ApiService.getEndpoint() + '/orderItem/create',
      method: 'POST',
      data: orderItem
    }).success(function(data) {
      callback(data);
    });
	};

	return {
		createReservation: createReservation,
		createCustomOrder: createCustomOrder,
    createOrderItem: createOrderItem
	};
});