// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(){
      console.log('added');
      this.length ===1 && this.playFirst();
    });

    this.on('ended', function() {
      console.log('ended');
      this.remove(this.at(0));
      this.length && this.playFirst();
    });

    this.on('dequeue', function() {
      console.log('dequeue');
      this.remove(this.at(0));
    });
  }
});

SongQueue.prototype.playFirst = function(){
  this.at(0).play();
};



SongQueue.prototype.remove = function(song){
  console.log('SongQueue remove');
  console.log('removing song from this ', this)
  Backbone.Collection.prototype.remove.call(this, song);
  
};