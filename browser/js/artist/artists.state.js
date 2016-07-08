juke.config(function($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: 'templates/artists-template.html',
    controller: 'ArtistsCtrl'
  });
});

juke.config(function($stateProvider) {
  $stateProvider.state('artistView', {
    url: '/artist/:id',
    templateUrl: 'templates/artist-template.html',
    controller: 'ArtistCtrl'
  })
  .state('artistView.albums', {
    url: '/albums',
    templateUrl: 'templates/artist-albums-template.html',
    controller: 'ArtistCtrl'
  })
  .state('artistView.songs', {
    url: '/songs',
    templateUrl: 'templates/artist-songs-template.html',
    controller: 'ArtistCtrl'
  });
});