(function() {
  'use strict';

  angular
    .module('ytVideoChannel')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.youtube = [];
    vm.currentVideo = [];
    vm.type = 'main';
  }
})();
