'use strict';

angular.module('MyApp')

// use factory for services
.factory('RegisterService', function($http, ApiService) {
	var register = function(credential, callback) {
		$http({
      url: ApiService.getEndpoint() + '/user/register',
      method: 'POST',
      data: credential
    }).success(function(data) {
    	console.log(data);
      callback(data);
    });
	};

  var registerCreditCard = function(creditCard, callback) {
    $http({
      url: ApiService.getEndpoint() + '/credit/credit',
      method: 'POST',
      data: creditCard
    }).success(function(data) {
      console.log(data);
      callback(data);
    });
  };

	return {
		register: register,
    registerCreditCard: registerCreditCard
	};
});