'use strict';

angular.module('MyApp')

// use factory for services
.factory('ItemService', function($http, LocalStorageService, ApiService) {
	var getItemsByRestaurantIDCategoryID = function(restaurantID, categoryID, callback) {
		$http({
      url: ApiService.getEndpoint() + '/item/items',
      method: 'GET',
      params: {restaurantID: restaurantID, categoryID: categoryID}
    }).success(function(data) {
      callback(data);
    });
	};

	return {
		getItemsByRestaurantIDCategoryID: getItemsByRestaurantIDCategoryID
	};
});