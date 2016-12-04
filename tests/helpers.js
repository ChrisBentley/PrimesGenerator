JS.Test.Unit.TestCase.extend({
  fixture: function(html) {
    this.before(function() {
      var holder = $('#fixture')
      if (holder.length === 0) {
        holder = $('<div id="fixture"></div>')
        $('body').append(holder)
      }
      holder.html(html)
    })

    this.after(function() {
      $('#fixture').empty()
    })
  },

  fixture_and_setup: function(html, setup_func) {
    this.before(function() {
      var holder = $('#fixture')
      if (holder.length === 0) {
        holder = $('<div id="fixture"></div>')
        $('body').append(holder)
      }
      holder.html(html);
      setup_func();
    })

    this.after(function() {
      $('#fixture').empty()
    })
  },
})
