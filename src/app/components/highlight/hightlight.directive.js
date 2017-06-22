(function() {
  'use strict';

  angular
    .module('ytVideoChannel')
    .directive('highlight', highlight);

  /** @ngInject */
  function highlight() {
    var directive = {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/highlight/highlight.html',
      controller: HighlightController,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HighlightController() {
      // var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
