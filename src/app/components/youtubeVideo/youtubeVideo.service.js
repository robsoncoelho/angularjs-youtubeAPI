(function() {
  'use strict';

  angular
    .module('ytVideoChannel')
    .factory('youTubeVideo', youTubeVideo);

  /** @ngInject */
  function youTubeVideo($log, $http, $sce, ytApi) {
    var apiHost = 'https://www.googleapis.com/youtube/v3/',
        apiChannel = apiHost + 'search?order=date&part=snippet&channelId=' + ytApi.CHANNEL_ID + '&key=' + ytApi.API_KEY;

    var service = {
      getVideos: getVideos,
      getVideosByKeyword: getVideosByKeyword,
      getVideoStats: getVideoStats
    };

    return service;

    function getVideos(type, pageToken) {
      var apiURL = apiChannel;

      switch(type){
        case 'main':
          apiURL += '&maxResults=4';
          break;
        case 'videos':
          apiURL += '&maxResults=12';
          break;
        default:
          apiURL += '&maxResults=12';
          break;
      }

      if( pageToken != undefined ) {
        apiURL += '&pageToken=' + pageToken; 
      }

      return $http.get(apiURL)
        .then(getVideosComplete)
        .catch(getAPIFailed);
    }

    function getVideosByKeyword(keyword) {
      var apiURL = apiChannel;
      apiURL += '&maxResults=50&q=' + keyword;

      return $http.get(apiURL)
        .then(getVideosComplete)
        .catch(getAPIFailed);
    }

    function getVideosComplete(response) {
      var data = response.data;

      data.items = data.items.map(function(item){
        if(item.id.videoId) {
          getVideoStats(item.id.videoId).then(function(_data) {
            item.views = _data.viewCount;
            item.url = $sce.trustAsResourceUrl( "https://www.youtube.com/embed/" + item.id.videoId );
          });
        } else {
          item.id.videoId = item.id.playlistId;
          item.url = $sce.trustAsResourceUrl( "https://www.youtube.com/embed/videoseries?list=" + item.id.playlistId );
          item.views = 0;
        }

        return item;
      });

      return data;
    }

    function getVideoStats(videoID) {
      var apiVideo = apiHost + 'videos?part=statistics&key=' + ytApi.API_KEY + '&id=' + videoID;

      return $http.get(apiVideo)
        .then(getVideoStatsComplete)
        .catch(getAPIFailed);
    }

    function getVideoStatsComplete(response) {
      return response.data.items[0].statistics;
    }

    function getAPIFailed(error) {
      $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
    }
  }
})();
