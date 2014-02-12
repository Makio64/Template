var Main, main,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

main = null;

Main = (function() {
  Main.prototype.dt = 0;

  Main.prototype.lastTime = 0;

  Main.prototype.pause = false;

  function Main() {
    this.resize = __bind(this.resize, this);
    this.update = __bind(this.update, this);
    this.pause = false;
    this.lastTime = Date.now();
    window.focus();
    requestAnimationFrame(this.update);
    return;
  }

  Main.prototype.update = function() {
    var dt, t;
    t = Date.now();
    dt = t - this.lastTime;
    this.lastTime = t;
    if (this.pause) {
      return;
    }
    requestAnimationFrame(this.update);
  };

  Main.prototype.resize = function() {
    var height, width;
    width = window.innerWidth;
    height = window.innerHeight;
  };

  return Main;

})();

document.addEventListener('DOMContentLoaded', function() {
  main = new Main();
  window.onblur = function(e) {
    main.pause = true;
    return cancelAnimationFrame(main.animate);
  };
  window.onfocus = function() {
    requestAnimationFrame(main.update);
    main.lastTime = Date.now();
    return main.pause = false;
  };
  window.onresize = function() {
    return main.resize();
  };
});
