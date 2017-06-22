(function() {
  'use strict';

  angular
    .module('ytVideoChannel')
    .directive('moreVideos', moreVideos)
    .directive('allVideos', allVideos)

  /** @ngInject */
  function moreVideos() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/list/list_main.html',
      controller: ListController,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ListController() {
      
    }
  }

  function allVideos() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/list/list_videos.html',
      controller: ListController,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ListController() {
      
    }
  }
})();
