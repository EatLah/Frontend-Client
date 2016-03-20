'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:ReservationController
 * @description
 * # ReservationController
 */
angular.module('MyApp')
  .controller('ReservationController', function($scope, $state, LocalStorageService, ReservationService) {

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

  });
