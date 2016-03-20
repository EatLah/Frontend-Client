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
      $scope.isPasswordMatch = true;
		});

    $scope.checkMatch = function() {
      if ($scope.credential.userPassword != $scope.credential.userRepassword) {
        $scope.isPasswordMatch = false;
        return false;
      }
      $scope.isPasswordMatch=true;
      return true;
    }

  	$scope.goToCreditPage = function(form) {
      if ($scope.checkMatch()) {
        if (form.$valid) {
          $scope.credential.userID = null;
          LocalStorageService.setObject('register_credential', $scope.credential);
          $state.go('app.credit');
        }
      } else {
        console.log('Not match');
      }
  	};

  });