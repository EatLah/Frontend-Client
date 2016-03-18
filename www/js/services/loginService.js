'use strict';

angular.module('MyApp')

// use factory for services
.factory('LoginService', function($http, ApiService) {
	var login = function(credential, callback) {
		$http({
      url: ApiService.getEndpoint() + '/user/login',
      method: 'POST',
      data: credential
    }).success(function(data) {
    	console.log(data);
      callback(data);
    });
	};

	return {
		login: login
	};
});