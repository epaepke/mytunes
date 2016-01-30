// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here! // lol no really... your code here

  tagName: 'div',

  template: _.template('<span class="artistName"><%= artist %></span> - <span><%= title %></span>'),

  events: {
    'click': function() {
      this.model.dequeue();
    },
    'enqueue': function(){
      this.render();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes)).addClass('queueSongContainer');
  }

});
