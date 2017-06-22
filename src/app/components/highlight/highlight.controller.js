(function() {
  'use strict';

  angular
    .module('ytVideoChannel')
    .controller('HighlightController', HighlightController);

  /** @ngInject */
  function HighlightController() {
    var vm = this;
    
    vm.readMore = 'toOpen';

    vm.openReadMore = function(){
      if(vm.readMore == 'toOpen'){
        vm.readMore = 'opened';
      }
    }
  }

})();
