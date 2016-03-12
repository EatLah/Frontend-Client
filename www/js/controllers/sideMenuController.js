'use strict';

/**
 * @ngdoc function
 * @name MyApp.controller:MainController
 * @description
 * # MainController
 */
angular.module('MyApp')
  .controller('SideMenuController', function($scope, $state, $ionicHistory, $ionicPopup) {
    $scope.$on('$ionicView.enter', function() {
      $ionicHistory.nextViewOptions({
        historyRoot: true,
        disableAnimate: true,
        disableBack: true
      });
      // if (!$localStorage.get('token') && !$state.includes("app.register") && !$state.includes("app.login")) {
      //   $state.go('app.login');
      // }
    });

    $scope.logout = function() {
      popUpConfirm('Logout', 'Are you sure you want to logout?');
    };

    var popUpConfirm = function(title, content) {
      var confirmPopup = $ionicPopup.confirm({
        title: title,
        template: content
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('Logout!');
        } else {
          console.log('Not logout!');
        }
      });
    };

  });