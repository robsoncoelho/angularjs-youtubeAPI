(function() {
  'use strict';

  angular
    .module('ytVideoChannel')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
