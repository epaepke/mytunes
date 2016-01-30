// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended' : function(){
      this.model.ended();
    }
  },

  initialize: function() {

  },

  setSong: function(song) {
    this.model = song;
    //this.$el.('onended', this.model ? this.model.ended.bind(this) : '');
    console.log('just added onended attribute');
    this.render();
  },

  render: function() {
    console.log('just rendered');
    this.$el.attr('src', this.model ? this.model.get('url') : '');
    return ;
  }

});
