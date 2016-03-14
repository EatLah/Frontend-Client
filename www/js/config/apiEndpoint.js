'use strict';

/**
 * @ngdoc constant
 * @name MyApp.API_ENDPOINT
 * @description
 * # API_ENDPOINT
 * Defines the API endpoint where our resources will make requests against.
 * Is used inside /services/ApiService.js to generate correct endpoint dynamically
 */


angular.module('MyApp')

// development
.constant('API_ENDPOINT', {
  host: 'http://localhost',
  port: 3000,
  path: '',
  needsAuth: false
});