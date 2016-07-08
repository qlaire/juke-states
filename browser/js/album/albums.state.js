juke.config(function($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: 'templates/albums-template.html',
    controller: 'AlbumsCtrl'
  });
});