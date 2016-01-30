// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playFirst: function(){
    this.playerView.setSong(model.get('currentSong'));
  },

  initialize: function() {
    this.on('change', this.playFirst);
    // this.playFirst();
  }

});