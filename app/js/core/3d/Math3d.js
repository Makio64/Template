var Math3d;

Math3d = (function() {
  function Math3d() {}

  Math3d.distance = function(v1, v2) {
    var dx, dy, dz;
    dx = v2.x - v1.x;
    dy = v2.y - v1.y;
    dz = v2.z - v1.z;
    return dx * dx + dy * dy + dz * dz;
  };

  Math3d.distanceSqrt = function(v1, v2) {
    var dx, dy, dz;
    dx = v2.x - v1.x;
    dy = v2.y - v1.y;
    dz = v2.z - v1.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };

  return Math3d;

})();
