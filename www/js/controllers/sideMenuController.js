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
      popUpAlert('Logout', 'Are you sure you want to logout?');
    };

    var popUpAlert = function(title, content) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: content
      });
      alertPopup.then(function(res) {
        // todo
      });
    };

  });