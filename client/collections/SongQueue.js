// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(){
      this.length ===1 && this.playFirst();
    });

    this.on('ended', function() {
      this.remove(this.models[0]);
      this.length && this.playFirst();
    });

    this.on('dequeue', this.remove);
  }
});

SongQueue.prototype.playFirst = function(){
  this.at(0).play();
};



SongQueue.prototype.remove = function(){
  Backbone.Collection.prototype.remove.call(this, this.at(0));
  
};