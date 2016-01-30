// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(){
      this.length ===1 && this.playFirst();
    });

    this.on('ended', function() {
      this.remove(this.at(0));
      this.length && this.playFirst();
    });

    this.on('dequeue', function(event) {
      this.remove(event.cid);
    });
  }
});

SongQueue.prototype.playFirst = function(){
  this.at(0).play();
};

SongQueue.prototype.remove = function(song){
  Backbone.Collection.prototype.remove.call(this, song);
  
};
