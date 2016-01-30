// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // playFirst: function(){
  //   // console.log('called for first song');
  //   // console.log('this songqueue ', this.models[0]);
  //   this.models[0].play();
  //   // this.playerView.setSong(model.get('currentSong'));
  // },

  initialize: function() {
    this.on('add', function(){
      console.log('actually working');
      this.length ===1 && this.playFirst();
    });
  }


});

SongQueue.prototype.playFirst = function(){
  this.models[0].play();
};