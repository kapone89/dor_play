new Vue({
  el: '#app',
  data: {
    description: "Major change request 1 day before the release",
    image_url: "http://66.media.tumblr.com/5827bf68b7abb99cc676a0551bb0705b/tumblr_inline_obk83ipvnJ1raprkq_500.gif",
  },
  methods: {
    reloadPainting: function () {
      that = this;
      $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://devopsreactions.tumblr.com/random') + '&callback=?', function(data){
        var el = $( '<div></div>' );
        el.html(data.contents);
        that.description = $(".post_title a", el)[0].textContent;
        console.log(that.description);
        that.image_url = $(".item_content img", el)[0].src;
      });
    }
  },
  ready: function () {
    that = this;
    setInterval(function () {
      that.reloadPainting();
    }, 300000);
  }
});
