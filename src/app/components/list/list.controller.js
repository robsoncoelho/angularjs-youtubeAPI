(function() {
  'use strict';
  angular
    .module('ytVideoChannel')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($scope, $document, $timeout, youTubeVideo) {
    var vm = this;
    var getFirstVideo = false;

    vm.isLoading = false;
    
    if($scope.view.type != "search"){
      getVideos($scope.view.type);
    } else {
      getVideosByKeyword($scope.view.keyword);
    }

    vm.getVideo = function(parentIndex, index) {
      $scope.view.currentVideo = $scope.view.youtube[parentIndex].items[index];
    }

    vm.loadVideos = function(pageToken) {
      vm.isLoading = true;
      getVideos($scope.view.type, pageToken);
    }

    function getVideos(type, pageToken){
      youTubeVideo.getVideos(type, pageToken).then(function(data) {
        youTubeResponse(data);
      }) 
    }

    function getVideosByKeyword(keyword){
      youTubeVideo.getVideosByKeyword(keyword).then(function(data) {
        youTubeResponse(data);
      }) 
    }

    function youTubeResponse(data){
      var list = $document[0].querySelectorAll(".scroll");
          list = list[list.length- 1];

      $scope.view.youtube.push(data);
      vm.isLoading = false;

      if(list){
        $timeout(function(){
          scrollTo(list, list.scrollHeight, 600);
        })
      }

      if(!getFirstVideo) {
        getFirstVideo = true;
        $scope.view.currentVideo = $scope.view.youtube[0].items[0];
      }
    }

    function scrollTo(element, to, duration) {
      if (duration <= 0) return;
      var difference = to - element.scrollTop;
      var perTick = difference / duration * 10;

      $timeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) return;
        scrollTo(element, to, duration - 10);
      }, 10);
    }
  }
})();
