var DataManager;

DataManager = (function() {
  function DataManager() {}

  DataManager.loading = 0;

  DataManager.jsons = {};

  DataManager.load = function(objects, callback) {
    var i, o, _i, _ref;
    this.callback = callback;
    for (i = _i = 0, _ref = objects.length; _i < _ref; i = _i += 1) {
      o = objects[i];
      this.loading++;
      $.getJSON(o.url, function(data) {
        DataManager.jsons[o.id] = data;
        DataManager.onLoadComplete();
      });
    }
  };

  DataManager.onLoadComplete = function() {
    DataManager.loading--;
    if (DataManager.loading === 0) {
      DataManager.callback();
    }
  };

  DataManager.get = function(id) {
    return this.jsons[id];
  };

  return DataManager;

})();
