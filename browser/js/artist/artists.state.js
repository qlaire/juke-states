juke.config(function($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: 'templates/artists-template.html',
    controller: 'ArtistsCtrl'
  });
});