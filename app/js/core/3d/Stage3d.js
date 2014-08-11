var Stage3d;

Stage3d = (function() {
  function Stage3d() {}

  Stage3d.camera = null;

  Stage3d.cameraTarget = null;

  Stage3d.scene = null;

  Stage3d.projector = null;

  Stage3d.renderer = null;

  Stage3d.init = function() {
    var HEIGHT, WIDTH;
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(40, WIDTH / HEIGHT, 1, 10000);
    this.camera.position.z = 15000;
    this.cameraTarget = new THREE.Vector3(0, 0, 300);
    this.scene = new THREE.Scene();
    this.projector = new THREE.Projector();
    this.renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    this.renderer.setSize(WIDTH, HEIGHT);
    document.body.appendChild(this.renderer.domElement);
  };

  Stage3d.render = function() {
    this.camera.position.x += (this.cameraTarget.x - this.camera.position.x) * 0.05;
    this.camera.position.y += (this.cameraTarget.y - this.camera.position.y) * 0.05;
    this.camera.position.z += (this.cameraTarget.z - this.camera.position.z) * 0.05;
    this.camera.lookAt(this.scene.position);
    Stage3d.renderer.render(this.scene, this.camera);
  };

  Stage3d.resize = function() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  return Stage3d;

})();
