(function() {
  'use strict';

  angular
    .module('ytVideoChannel')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController($scope, $uibModal, $log, $document, $location) {
    var vm = this;
    var modalInstance;

    vm.modal = true;
    vm.youtube = [];
    vm.class = "list";
    vm.currentVideo = [];
    vm.type = 'search';

    vm.keyword = $location.search().q;

    vm.openModal = function (parentSelector) {
      var parentElem = parentSelector ? 
      angular.element($document[0].querySelector(parentSelector)) : undefined;
      modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/components/highlight/highlight.html',
        controller: 'HighlightController',
        scope: $scope,
        backdropClass: 'custom',
        appendTo: parentElem
      })
    }

    vm.close = function () {
      modalInstance.close();
    };
  }
})();
