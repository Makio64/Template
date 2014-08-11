var Parameters;

Parameters = (function() {
  function Parameters() {}

  Parameters.gui = null;

  Parameters.initGUI = function() {
    this.gui = new datGUI();
  };

  return Parameters;

})();
