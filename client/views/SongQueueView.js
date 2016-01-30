// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "div",


  initialize: function() {
    this.collection.on('add', this.render.bind(this));
    this.collection.on('remove', this.render.bind(this));
    this.collection.on('dequeue', this.render.bind(this));

    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el && this.$el.children().detach();
    this.$el.html('<h3>Queue</h3>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    this.$el.addClass('queue col-md-5');
  }

});
