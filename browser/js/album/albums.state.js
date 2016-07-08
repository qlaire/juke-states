juke.config(function($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: 'templates/albums-template.html',
    controller: 'AlbumsCtrl'
  });
});

juke.config(function($stateProvider) {
  $stateProvider.state('albumView', {
    url: '/album/:id',
    templateUrl: 'templates/album-template.html',
    controller: 'AlbumCtrl'
  });
});