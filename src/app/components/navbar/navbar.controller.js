(function() {
  'use strict';

  angular
    .module('ytVideoChannel')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($element, $location) {
    var vm = this;
    
    vm.searchField = false;
    vm.keyword = "";

    vm.searchBox = function(){
      if(vm.searchField != true){
        vm.searchField = true;
        $element[0].querySelector("#srch-term").focus();
      } else {
        if(vm.keyword.length > 1){
          $location.path('/search').search({q: vm.keyword});
        }
      }
    }
  }

})();
