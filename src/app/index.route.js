(function() {
  'use strict';

  angular
    .module('ytVideoChannel')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'view'
      })
      .when('/videos', {
        templateUrl: 'app/videos/videos.html',
        controller: 'VideosController',
        controllerAs: 'view'
      })
      .when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'view'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

})();
