angular.module('MyApp')

.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
  // register $http interceptors, if any. e.g.
  // $httpProvider.interceptors.push('interceptor-name');

  // Application routing
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/sideMenu.html',
      controller: 'SideMenuController'
    })
    .state('app.home', {
      url: '/home',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/home.html',
          controller: 'HomeController'
        }
      }
    })
    .state('app.account', {
      url: '/account',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/account.html',
          controller: 'AccountController'
        }
      }
    })
    .state('app.reservation', {
      url: '/reservation',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/reservation.html',
          controller: 'ReservationController'
        }
      }
    })
    .state('app.payment', {
      url: '/payment',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/payment.html',
          controller: 'PaymentController'
        }
      }
    })
    .state('app.feedback', {
      url: '/feedback',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/feedback.html',
          controller: 'FeedbackController'
        }
      }
    })
    .state('app.restaurant', {
      url: '/restaurant',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/restaurant.html',
          controller: 'RestaurantController'
        }
      }
    })
    .state('app.detail', {
      url: '/detail',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/detail.html',
          controller: 'DetailController'
        }
      }
    })
    .state('app.menu', {
      url: '/menu',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/menu.html',
          controller: 'MenuController'
        }
      }
    })
    .state('app.item', {
      url: '/item',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/item.html',
          controller: 'ItemController'
        }
      }
    })

  // redirects to default route for undefined routes
  $urlRouterProvider.otherwise('/app/home');
});
