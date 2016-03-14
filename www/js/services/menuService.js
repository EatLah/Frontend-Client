'use strict';

angular.module('MyApp')

// use factory for services
.factory('MenuService', function($http, LocalStorageService, ApiService) {
	var getMenuCategoriesByRestaurantID = function(restaurantID, callback) {
		$http({
      url: ApiService.getEndpoint() + '/menu/menuCategories',
      method: 'GET',
      params: {restaurantID: restaurantID}
    }).success(function(data) {
      callback(data);
    });
	};

	return {
		getMenuCategoriesByRestaurantID: getMenuCategoriesByRestaurantID
	};
});