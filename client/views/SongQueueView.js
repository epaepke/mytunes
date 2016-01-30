// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",


  initialize: function() {
    // console.log('collection ', this.collection);
    this.collection.on('add', this.render.bind(this));
    this.render();
    // this.on('enqueue', function(model) {
      // this.render();
      // console.log('songQueue changed');
      // console.log(model);
      // this.playerView.setSong(model.get('currentSong'));
    // }, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    console.log('this ', this, " this.$el ", this.$el);
    this.$el && this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
