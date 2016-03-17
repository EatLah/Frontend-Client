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
    .state('app.order', {
      url: '/order',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/order.html',
          controller: 'OrderController'
        }
      }
    })
    .state('app.cart', {
      url: '/cart',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/cart.html',
          controller: 'CartController'
        }
      }
    })
    .state('app.dining', {
      url: '/dining',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/dining.html',
          controller: 'DiningController'
        }
      }
    })
    .state('app.info', {
      url: '/info',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/info.html',
          controller: 'InfoController'
        }
      }
    })
    .state('app.login', {
      url: '/login',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/login.html',
          controller: 'LoginController'
        }
      }
    })
    .state('app.register', {
      url: '/register',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/register.html',
          controller: 'RegisterController'
        }
      }
    })
    .state('app.credit', {
      url: '/credit',
      cache: false,
      views: {
        'viewContent': {
          templateUrl: 'templates/views/credit.html',
          controller: 'CreditController'
        }
      }
    })

  // redirects to default route for undefined routes
  $urlRouterProvider.otherwise('/app/home');
});
