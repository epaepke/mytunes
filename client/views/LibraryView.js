// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "div",

  events: {
    onKeyDown: function() {

      // SC.get('/tracks', {
      //   q: this.$el.val(), license: 'cc-by-sa'})
      //   .then(function(tracks) {
      //   console.log(tracks);
      // });
      console.log(this.$el.find('input').val());
    }
  },

  keyDownHandler: function() {
    console.log('fired');
  },

  initialize: function() {
    this.render();

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<input type = "text" placeholder = "Search" onKeyDown='+this.keyDownHandler.bind(this)+'/>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
    this.$el.addClass('library col-md-7');
  }

});
