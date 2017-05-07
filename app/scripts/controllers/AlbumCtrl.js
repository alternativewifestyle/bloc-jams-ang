//Add an albumData property that holds a copy of albumPicasso.
//fuck if I know, I can't tell if it works or not. 

(function() {
  function AlbumCtrl() {
this.albums = [];
for (var i=0; i<12; i++){
  this.albums.push(angular.copy(albumPicasso));
}
  }
  angular
  .module('blocJams')
  .controller('AlbumCtrl', AlbumCtrl);
})();
