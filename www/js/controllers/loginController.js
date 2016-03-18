'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:LoginController
 * @description
 * # LoginController
 */
angular.module('MyApp')
  .controller('LoginController', function($scope, $state, $ionicLoading, $ionicPopup, LoginService, LocalStorageService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.credential = {};
		});

		$scope.show = function() {
	    $ionicLoading.show({
		    templateUrl: 'templates/utils/load.html'
		  });
	  };

	  $scope.hide = function(){
	    $ionicLoading.hide();
	  };

  	$scope.userLogin = function() {
  		$scope.show();
  		LoginService.login($scope.credential, function(data) {
  			if (data.status === 'success') {
  				LocalStorageService.set('eatlah_token', data.eatlah_token);
  				LocalStorageService.setObject('eatlah_user', data.eatlah_user);
  				$scope.hide();
          $state.go('app.home');
  			} else {
  				$scope.hide();
  				var alertPopup = $ionicPopup.alert({
		  			title: 'Login Failed!',
		  			template: data.message
		  		});

		  		alertPopup.then(function(res) {
		  			console.log("Login failed!");
		  		});
  			}
  		});
  	};

  });