//Add an albumData property that holds a copy of albumPicasso.
//fuck if I know, I can't tell if it works or not.

// var albumData = {
//   title: 'Цвета',
//   artist: 'Пабло Пикассо',
//   label: 'Кубизм',
//   year: '1881',
//   albumArtUrl: 'assets/images/album_covers/01.png',
//   songs: [   { title: 'синий', duration: 161.71, audioUrl: 'assets/music/blue' },
//          { title: 'зеленый', duration: 103.96, audioUrl: 'assets/music/green' },
//          { title: 'красный', duration: 268.45, audioUrl: 'assets/music/red' },
//          { title: 'розовый', duration: 153.14, audioUrl: 'assets/music/pink' },
//          { title: 'фуксин', duration: 374.22, audioUrl: 'assets/music/magenta' }
//    ]
// };


(function() {
function AlbumCtrl(Fixtures, SongPlayer)  {
this.albumData = Fixtures.getAlbum();
this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
