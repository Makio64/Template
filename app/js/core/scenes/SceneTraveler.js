var SceneTraveler;

SceneTraveler = (function() {
  function SceneTraveler() {}

  SceneTraveler.currentScene = null;

  SceneTraveler.nextScene = null;

  SceneTraveler.init = function() {};

  SceneTraveler.to = function(scene) {
    this.nextScene = scene;
    if (this.currentScene !== null) {
      this.currentScene.transitionOut();
    } else {
      this.onTransitionOutComplete();
    }
  };

  SceneTraveler.onTransitionOutComplete = function() {
    if (this.currentScene !== null) {
      Stage2d.stage.removeChild(this.currentScene);
    }
    this.currentScene = this.nextScene;
    this.currentScene.transitionIn();
    console.log(this.currentScene);
    Stage2d.stage.addChild(this.currentScene);
  };

  SceneTraveler.resize = function() {
    if (this.currentScene !== null) {
      this.currentScene.resize();
    }
    if (this.nextScene !== null) {
      this.nextScene.resize();
    }
  };

  return SceneTraveler;

})();
