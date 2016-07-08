juke.config(function($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/templates/album-template.html',
    controller: 'AlbumsCtrl'
  });
});