'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:RegisterController
 * @description
 * # RegisterController
 */
angular.module('MyApp')
  .controller('RegisterController', function($scope, $state, RegisterService, LocalStorageService) {

  	$scope.$on('$ionicView.enter', function() {
  		$scope.credential = {};
		});

  	$scope.goToCreditPage = function(form) {
      if (form.$valid) {
    		$scope.credential.userID = null;
    		LocalStorageService.setObject('register_credential', $scope.credential);
    		$state.go('app.credit');
      }
  	};

  });