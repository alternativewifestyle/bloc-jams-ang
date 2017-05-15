(function() {
  function SongPlayer() {
    var SongPlayer = {};
    var currentSong = null;
    /**
 * @desc Buzz object audio file
 * @type {Object}
 */
    var currentBuzzObject = null;


    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song) {
       if (currentBuzzObject) {
           currentBuzzObject.stop();
           currentSong.playing = null;
       }

       currentBuzzObject = new buzz.sound(song.audioUrl, {
           formats: ['mp3'],
           preload: true
       });

       currentSong = song;
    };

    /**
     * @function playSong
     * @desc Plays the currentBuzzObject and sets the property of the song obj to true
     * @param {Object} song
     */
     var playSong = function(song){
         currentBuzzObject.play();
         song.playing = true;
         //CP7: Replace all instances when these two lines of code are used together with the playSong function. (WTF DOES THAT MEAN?)
     }

    SongPlayer.play = function(song) {
         if (currentSong !== song) {

             setSong(song);
             currentBuzzObject.play();
             song.playing = true;
         } else if (currentSong === song) {
             if (currentBuzzObject.isPaused()) {
                 currentBuzzObject.play();
             }
         }
     };
    };

    SongPlayer.pause = function(song) {
      currentBuzzObject.pause();
      song.playing = false;
    }

    return SongPlayer;
  }
  angular
  .module('blocJams')
  .factory('SongPlayer', SongPlayer);
}

)();
