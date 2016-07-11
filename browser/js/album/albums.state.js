juke.config(function($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: 'templates/albums-template.html',
    resolve: {
      albums: function(AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    },
    controller: 'AlbumsCtrl'
  });
});

juke.config(function($stateProvider) {
  $stateProvider.state('albumView', {
    url: '/album/:id',
    templateUrl: 'templates/album-template.html',
    resolve: {
      album: function(AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.id);
      }
    },
    controller: 'AlbumCtrl'
  });
});