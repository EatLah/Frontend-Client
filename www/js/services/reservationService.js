'use strict';

angular.module('MyApp')

// use factory for services
.factory('ReservationService', function($http, LocalStorageService, ApiService) {
  // var token = LocalStorageService.get('token');
  var getReservations = function(customerID, callback) {
    $http({
      url: ApiService.getEndpoint() + '/reservation/reservations',
      method: 'GET',
      params: {
        customerID: customerID
      }
    }).success(function(data) {
      callback(data);
    });
  };

  var cancelReservation = function(reservationID, callback) {
    $http({
      url: ApiService.getEndpoint() + '/reservation/delete',
      method: 'DELETE',
      params: {
        reservationID: reservationID
      }
    }).success(function(data) {
      callback(data);
    });
  };

  // public api
  return {
    getReservations: getReservations,
    cancelReservation: cancelReservation
  };

});