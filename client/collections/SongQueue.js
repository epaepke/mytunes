// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(){
      this.length ===1 && this.playFirst();
    });

    this.on('ended', function() {
      this.remove(this.models[0]);
    });
  }
});

SongQueue.prototype.playFirst = function(){
  this.models[0].play();
};