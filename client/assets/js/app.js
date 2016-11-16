(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

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

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:true,
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
