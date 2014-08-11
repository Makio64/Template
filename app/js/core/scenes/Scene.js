var Scene,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Scene = (function(_super) {
  __extends(Scene, _super);

  function Scene() {
    Scene.__super__.constructor.call(this);
    return;
  }

  Scene.prototype.update = function(dt) {};

  Scene.prototype.resize = function() {};

  Scene.prototype.transitionIn = function() {};

  Scene.prototype.transitionOut = function() {};

  Scene.prototype.onTransitionInComplete = function() {};

  Scene.prototype.onTransitionOutComplete = function() {
    SceneTraveler.onTransitionOutComplete();
  };

  Scene.prototype.dispose = function() {};

  return Scene;

})(PIXI.DisplayObjectContainer);
