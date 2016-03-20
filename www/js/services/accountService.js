'use strict';

angular.module('MyApp')

// use factory for services
.factory('AccountService', function($http, ApiService) {
	var getAccountInfo = function(contactNumber, callback) {
		$http({
      url: ApiService.getEndpoint() + '/user/user',
      method: 'GET',
      params: {
        contactNumber: contactNumber
      }
    }).success(function(data) {
    	console.log(data);
      callback(data);
    });
	};

  var getCardInfo = function(customerID, callback) {
    $http({
      url: ApiService.getEndpoint() + '/credit/credit',
      method: 'GET',
      params: {
        customerID: customerID
      }
    }).success(function(data) {
      console.log(data);
      callback(data);
    });
  };

	return {
		getAccountInfo: getAccountInfo,
    getCardInfo: getCardInfo
	};
});