'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:MainController
 * @description
 * # MainController
 */
angular.module('MyApp')
  .controller('SideMenuController', function($scope, $state, $ionicHistory, $ionicPopup, $ionicSideMenuDelegate, LocalStorageService) {
    $scope.$on('$ionicView.enter', function() {
      $ionicHistory.nextViewOptions({
        historyRoot: true,
        disableAnimate: true,
        disableBack: true
      });
      if (!LocalStorageService.get('eatlah_token') &&
        !$state.includes("app.register") &&
        !$state.includes("app.login") &&
        !$state.includes("app.credit")) {
        $state.go('app.login');
      }
    });

    $scope.logout = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Logout',
        template: 'Are you sure you want to logout?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('Logout!');
          LocalStorageService.remove('eatlah_token');
          LocalStorageService.remove('eatlah_user');
          $ionicSideMenuDelegate.toggleLeft();
          $state.go('app.login');
        } else {
          console.log('Not logout!');
        }
      });
      
    };

  });