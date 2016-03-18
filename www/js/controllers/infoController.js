'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:InfoController
 * @description
 * # InfoController
 */
angular.module('MyApp')
  .controller('InfoController', function($scope, $state, $ionicPopup, LocalStorageService, InfoService) {

    $scope.$on('$ionicView.enter', function() {
      $scope.reservation = {};
      $scope.customOrder = {};
      $scope.orderItem = {};
    });

  	$scope.confirmReservation = function() {
  		var confirmPopup = $ionicPopup.confirm({
  			title: 'Confrim Reservation',
  			template: 'Are you sure make this reservation?'
  		});

  		confirmPopup.then(function(res) {
  			if (res) {
  				console.log("Make this reservation!");
  				// Create a lot of things in database ...
          $scope.selectedRestaurant = LocalStorageService.getObject('restaurantDetail');
          $scope.eatlah_user = LocalStorageService.getObject('eatlah_user');
          $scope.diningDetail = LocalStorageService.getObject('diningDetail');

  				$scope.reservation.reservation = {
  					reservationID: null,
  					restaurantID: $scope.selectedRestaurant.ID,
  					customerID: $scope.eatlah_user.userID,
  					numberOfPax: $scope.diningDetail.totalPax,
  					reservationStatus: null,
  					bookedTimeslot: null,
  					orderNumber: null,
  					review: null
  				};

  				$scope.customOrder.customOrder = {
  					orderID: null,
  					restaurantID: $scope.selectedRestaurant.ID,
  					reservationID: null,
  					tableNumber: null,
  					staffID: null,
  					orderTimestamp: null,
  					totalBill: null,
  					orderStatus: null,
  					orderType: null
  				};

  				// template
  				$scope.orderItem.orderItem = {
  					orderItemID: null,
  					orderNumber: null,
  					restaurantID: $scope.selectedRestaurant.ID,
  					reservationID: null,
  					tableNumber: null,
  					foodItemID: null,
  					orderQty: null,
  					subTotal: null,
  					pax: $scope.diningDetail.totalPax,
  					request: null,
  					prepStatus: null
  				};

          InfoService.createReservation($scope.reservation, function(data) {
            console.log(data);
          });

          InfoService.createCustomOrder($scope.customOrder, function(data) {
            console.log(data);
          });

          InfoService.createOrderItem($scope.orderItem, function(data) {
            console.log(data);
          });

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