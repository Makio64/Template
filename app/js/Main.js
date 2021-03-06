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
    if (window.PIXI !== void 0) {
      Stage2d.init({
        transparent: false,
        antialias: false,
        background: 0xFF0000
      });
    }
    if (window.THREE !== void 0) {
      Stage3d.init({
        transparent: false,
        antialias: false,
        background: 0x0000FF
      });
    }
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
    SceneTraveler.update(dt);
    if (window.PIXI) {
      Stage2d.render();
    }
    if (window.THREE) {
      Stage3d.render();
    }
    requestAnimationFrame(this.update);
  };

  Main.prototype.resize = function() {
    var height, width;
    width = window.innerWidth;
    height = window.innerHeight;
    SceneTraveler.resize();
  };

  return Main;

})();

document.addEventListener('DOMContentLoaded', function() {
  main = new Main();
  window.onblur = function(e) {
    main.pause = true;
    cancelAnimationFrame(main.update);
  };
  window.onfocus = function() {
    requestAnimationFrame(main.update);
    main.lastTime = Date.now();
    main.pause = false;
  };
  window.onresize = function() {
    main.resize();
  };
});

//# sourceMappingURL=data:application/json;base64,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QUFpQixTQUFBLEdBQUE7QUFDaEIsSUFBQSxxQkFBQSxDQUFzQixJQUFJLENBQUMsTUFBM0IsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFJLENBQUMsUUFBTCxHQUFnQixJQUFJLENBQUMsR0FBTCxDQUFBLENBRGhCLENBQUE7QUFBQSxJQUVBLElBQUksQ0FBQyxLQUFMLEdBQWEsS0FGYixDQURnQjtFQUFBLENBUGpCLENBQUE7QUFBQSxFQWFBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLFNBQUEsR0FBQTtBQUNqQixJQUFBLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxDQURpQjtFQUFBLENBYmxCLENBRDZDO0FBQUEsQ0FBOUMsQ0F2REEsQ0FBQSIsImZpbGUiOiJNYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR2xvYmFsIHZhclxuXG5tYWluID0gbnVsbFxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDbGFzcyBNYWluXG5cbmNsYXNzIE1haW5cblxuXHRkdCBcdFx0XHRcdDogMFxuXHRsYXN0VGltZSBcdFx0OiAwXG5cdHBhdXNlIFx0XHRcdDogZmFsc2VcblxuXHRjb25zdHJ1Y3RvcjooKS0+XG5cdFx0QHBhdXNlID0gZmFsc2Vcblx0XHRAbGFzdFRpbWUgPSBEYXRlLm5vdygpXG5cdFx0d2luZG93LmZvY3VzKClcblx0XHRcblx0XHRpZiB3aW5kb3cuUElYSSAhPSB1bmRlZmluZWRcblx0XHRcdFN0YWdlMmQuaW5pdCh7dHJhbnNwYXJlbnQ6ZmFsc2UsYW50aWFsaWFzOmZhbHNlLCBiYWNrZ3JvdW5kOjB4RkYwMDAwfSlcblxuXHRcdGlmIHdpbmRvdy5USFJFRSAhPSB1bmRlZmluZWRcblx0XHRcdFN0YWdlM2QuaW5pdCh7dHJhbnNwYXJlbnQ6ZmFsc2UsYW50aWFsaWFzOmZhbHNlLCBiYWNrZ3JvdW5kOjB4MDAwMEZGfSlcblxuXHRcdCMgU2NlbmVUcmF2ZWxlci50cmF2ZWxUbyggbmV3IExvYWRlclNjZW5lKCkgKVxuXHRcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggQHVwZGF0ZSApXG5cdFx0cmV0dXJuXG5cblx0dXBkYXRlOigpPT5cblx0XHR0ID0gRGF0ZS5ub3coKVxuXHRcdGR0ID0gdCAtIEBsYXN0VGltZVxuXHRcdEBsYXN0VGltZSA9IHRcblxuXHRcdGlmIEBwYXVzZSB0aGVuIHJldHVyblxuXG5cdFx0IyB1cGRhdGUgbG9naWMgaGVyZVxuXHRcdFNjZW5lVHJhdmVsZXIudXBkYXRlKGR0KVxuXHRcdFxuXHRcdCMgcmVuZGVyIGZyYW1lXG5cdFx0aWYgd2luZG93LlBJWElcblx0XHRcdFN0YWdlMmQucmVuZGVyKClcblxuXHRcdGlmIHdpbmRvdy5USFJFRVxuXHRcdFx0U3RhZ2UzZC5yZW5kZXIoKVxuXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBAdXBkYXRlIClcblx0XHRyZXR1cm5cblxuXHRyZXNpemU6KCk9PlxuXHRcdHdpZHRoIFx0PSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdGhlaWdodCBcdD0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0U2NlbmVUcmF2ZWxlci5yZXNpemUoKVxuXHRcdHJldHVyblxuXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG9uIERvY3VtZW50IFJlYWR5XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKS0+XG5cdG1haW4gPSBuZXcgTWFpbigpXG5cdFxuXHR3aW5kb3cub25ibHVyID0gKGUpLT5cblx0XHRtYWluLnBhdXNlID0gdHJ1ZVxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKG1haW4udXBkYXRlKVxuXHRcdHJldHVyblxuXG5cdHdpbmRvdy5vbmZvY3VzID0gKCktPlxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluLnVwZGF0ZSlcblx0XHRtYWluLmxhc3RUaW1lID0gRGF0ZS5ub3coKVxuXHRcdG1haW4ucGF1c2UgPSBmYWxzZVxuXHRcdHJldHVyblxuXG5cdHdpbmRvdy5vbnJlc2l6ZSA9ICgpLT5cblx0XHRtYWluLnJlc2l6ZSgpXG5cdFx0cmV0dXJuXG5cblx0cmV0dXJuXG4pIl19