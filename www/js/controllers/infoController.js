'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:InfoController
 * @description
 * # InfoController
 */
angular.module('MyApp')
  .controller('InfoController', function($scope, $state, $ionicPopup, LocalStorageService) {

  	$scope.confirmReservation = function() {
  		var confirmPopup = $ionicPopup.confirm({
  			title: 'Confrim Reservation',
  			template: 'Are you sure make this reservation?'
  		});

  		confirmPopup.then(function(res) {
  			if (res) {
  				console.log("Make this reservation!");
  				// Create a lot of things in database ...
  				$scope.reservation = {
  					reservationID: null,
  					restaurantID: null,
  					customerID: null,
  					numberOfPax: null,
  					reservationStatus: null,
  					bookedTimeslot: null,
  					orderNumber: null,
  					review: null
  				};
  				$scope.customOrder = {
  					orderID: null,
  					restaurantID: null,
  					reservationID: null,
  					tableNumber: null,
  					staffID: null,
  					orderTimestamp: null,
  					totalBill: null,
  					orderStatus: null,
  					orderType: null
  				};

  				// template
  				$scope.orderItem = {
  					orderItemID: null,
  					orderNumber: null,
  					restaurantID: null,
  					reservationID: null,
  					tableNumber: null,
  					foodItemID: null,
  					orderQty: null,
  					subTotal: null,
  					pax: null,
  					request: null,
  					prepStatus: null
  				};

          var alertPopup = $ionicPopup.alert({
            title: 'Reserve Successfully!',
            template: 'You have made a reservation!'
          });

          alertPopup.then();

  				$state.go('app.home');
  			} else {
  				console.log("Don't make this reservation!");
  			}
  		});
  	};

  });