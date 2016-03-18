'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:AccountController
 * @description
 * # AccountController
 */
angular.module('MyApp')
  .controller('AccountController', function($scope, $state, $ionicLoading, LocalStorageService, AccountService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.eatlah_user = LocalStorageService.getObject('eatlah_user');
		});

  	$scope.show = function() {
	    $ionicLoading.show({
		    templateUrl: 'templates/utils/load.html'
		  });
	  };

	  $scope.hide = function(){
	    $ionicLoading.hide();
	  };

	  $scope.getAccountInfo = function() {
	  	$scope.show();
	  	AccountService.getAccountInfo($scope.eatlah_user.contactNumber, function(data) {
	  		LocalStorageService.setObject('eatlah_user', data);
	  		$scope.eatlah_user = LocalStorageService.getObject('eatlah_user');
	  		$scope.hide();
	  		$scope.$broadcast('scroll.refreshComplete');
	  	});
	  };
   
  });