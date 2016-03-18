'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:CreditController
 * @description
 * # CreditController
 */
angular.module('MyApp')
  .controller('CreditController', function($scope, $state, $ionicLoading, $ionicPopup, RegisterService, LocalStorageService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.credential = LocalStorageService.getObject('register_credential');
		});

		$scope.show = function() {
	    $ionicLoading.show({
		    templateUrl: 'templates/utils/load.html'
		  });
	  };

	  $scope.hide = function(){
	    $ionicLoading.hide();
	  };

		$scope.userRegister = function() {
			$scope.show();

			$scope.user = {};
			$scope.user.user = {};
			$scope.user.user.userID = $scope.credential.userID;
			$scope.user.user.userName = $scope.credential.userName;
			$scope.user.user.userPassword = $scope.credential.userPassword;
			$scope.user.user.firstName = '';
			$scope.user.user.lastName = '';
			$scope.user.user.userType = 'restaurant_user';
			$scope.user.user.gender = '';
			$scope.user.user.contactNumber = $scope.credential.contactNumber;
			$scope.user.user.emailAddress = '';

			RegisterService.register($scope.user, function(data) {
				if (data.status === 'success') {
					LocalStorageService.set('eatlah_token', data.eatlah_token);
  				LocalStorageService.setObject('eatlah_user', data.eatlah_user);
  				$scope.hide();
          $state.go('app.home');
				} else {
					$scope.hide();
  				var alertPopup = $ionicPopup.alert({
		  			title: 'Register Failed!',
		  			template: data.message
		  		});

		  		alertPopup.then(function(res) {
		  			console.log("Register failed!");
		  		});
				}
			});
		};

  });