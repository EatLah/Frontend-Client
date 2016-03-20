'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:ReservationController
 * @description
 * # ReservationController
 */
angular.module('MyApp')
  .controller('ReservationController', function($scope, $state, $ionicPopup, LocalStorageService, ReservationService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.eatlah_user = LocalStorageService.getObject('eatlah_user');
  		$scope.getReservationList();
		});

		$scope.getReservationList = function() {
			ReservationService.getReservations($scope.eatlah_user.userID, function(data) {
				$scope.reservations = data;
				$scope.$broadcast('scroll.refreshComplete');
			});
		};

		$scope.cancelReservation = function(index) {
			var confirmPopup = $ionicPopup.confirm({
        title: 'Cancel Reservation',
        template: 'Are you sure you want to cancel this reservation ?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          ReservationService.cancelReservation($scope.reservations[index].reservationID, function(data) {
						console.log(data);
						$scope.getReservationList();
					});
        }
      });
		};

		$scope.goToReservationDetailPage = function(index) {

		};

  });
