(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',
    'ngRoute',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    //others
    'slick'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider', '$routeProvider'];

  function config($urlProvider, $locationProvider, $routeProvider) {
    $urlProvider.otherwise('/');

    $routeProvider
      .when('/spheric', {
        templateUrl: 'projects/spheric.html',
      })
      .when('/cinario', {
        templateUrl: 'projects/cinario.html',
      })
      .when('/the-road', {
        templateUrl: 'projects/road.html',
      })
      .when('/misadventures', {
        templateUrl: 'projects/misadventures.html',
      })
      .when('/reinventing-michael-banks', {
        templateUrl: 'projects/tmb.html',
      })
      .when('/will', {
        templateUrl: 'projects/will.html',
      })
      .when('/weddings', {
        templateUrl: 'projects/weddings.html',
      })
      .when('/about', {
        templateUrl: 'about.html',
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run($rootScope) {
    FastClick.attach(document.body);

    $rootScope.$on('$stateChangeSuccess', function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    $(document).ready(function() {

      $('#horn_images').cycle({
          delay:  1000,
          speed:  500
      });

    } );
  }

})();
