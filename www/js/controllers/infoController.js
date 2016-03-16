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
  			} else {
  				console.log("Don't make this reservation!");
  			}
  		});
  	};

  });