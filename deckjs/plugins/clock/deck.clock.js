(function($, deck, undefined) {
  var $d = $(document),
      timer, seconds = 0, dom = {}, started = false, ready = false;

  $.extend(true, $[deck].defaults, {
    enable: true,
    selectors: {
      clock: "#clock",
      toggle: "#toggle-clock",
      time: "#clock-time"
    }
  });

  /**
   * Set clock time. Translates value of @seconds into HH:MM:SS.
   * Called by one-second setInterval timer.
   */
  function setTime(){
    "use strict";
    seconds += 1;
    var hours = parseInt(seconds / 3600, 10) % 24,
        minutes = parseInt(seconds / 60, 10) % 60,
        secs = seconds % 60;

    var res = [
      hours < 10 ? "0" + hours : hours,
      minutes < 10 ? "0" + minutes : minutes,
      secs  < 10 ? "0" + secs : secs
    ].join(":");

    dom.time.text(res);
  }

  /**
   * Toggle clock start / pause.
   */
  function toggleClock(){
    "use strict";
    if(started){
      clearInterval(timer);
      dom.toggle.text("Start");
    } else {
      timer = setInterval(setTime, 1000);
      dom.toggle.text("Pause");
    }
    started = !started;
  }

  /**
   * Setup clock DOM and initialize variables.
   */
  function setupClock(){
    "use strict";
    var opts    = $[deck]('getOptions');
    if(!opts.clock.enable){
      $(opts.selectors.clock).remove();
      return;
    }
    dom.toggle  = $(opts.selectors.toggle);
    dom.time    = $(opts.selectors.time);
    started = false;

    dom.toggle.text("Start").on("click", toggleClock);
    dom.time.text("00:00:00");

    ready = true;
  }

  $d.bind('deck.init', setupClock);

  /**
   * Make sure clock is started automatically on first slide change, in case it wasn't started manually/
   */
  $d.bind('deck.change', function(event, from, to){
    "use strict";
    if(!started && ready){
      toggleClock();
    }
  });

})(jQuery, 'deck');