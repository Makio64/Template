var Stage2d;

Stage2d = (function() {
  function Stage2d() {}

  Stage2d.stage = null;

  Stage2d.renderer = null;

  Stage2d.init = function() {
    this.renderer = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    this.stage = new PIXI.Stage();
    document.body.appendChild(this.renderer.view);
  };

  Stage2d.render = function() {
    this.renderer.render(this.stage);
  };

  Stage2d.resize = function() {
    this.renderer.resize(window.innerWidth, window.innerHeight);
  };

  return Stage2d;

})();
