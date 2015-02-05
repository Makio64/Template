var Scene;

Scene = (function() {
  function Scene() {
    return;
  }

  Scene.prototype.update = function(dt) {};

  Scene.prototype.resize = function() {};

  Scene.prototype.transitionIn = function() {
    this.onTransitionInComplete();
  };

  Scene.prototype.transitionOut = function() {
    this.onTransitionOutComplete();
  };

  Scene.prototype.onTransitionInComplete = function() {};

  Scene.prototype.onTransitionOutComplete = function() {
    SceneTraveler.onTransitionOutComplete();
  };

  Scene.prototype.dispose = function() {};

  return Scene;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvc2NlbmVzL1NjZW5lLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxJQUFBLEtBQUE7O0FBQUE7QUFFYSxFQUFBLGVBQUEsR0FBQTtBQUNYLFVBQUEsQ0FEVztFQUFBLENBQVo7O0FBQUEsa0JBR0EsTUFBQSxHQUFPLFNBQUMsRUFBRCxHQUFBLENBSFAsQ0FBQTs7QUFBQSxrQkFNQSxNQUFBLEdBQU8sU0FBQSxHQUFBLENBTlAsQ0FBQTs7QUFBQSxrQkFTQSxZQUFBLEdBQWEsU0FBQSxHQUFBO0FBQ1osSUFBQSxJQUFDLENBQUEsc0JBQUQsQ0FBQSxDQUFBLENBRFk7RUFBQSxDQVRiLENBQUE7O0FBQUEsa0JBYUEsYUFBQSxHQUFjLFNBQUEsR0FBQTtBQUNiLElBQUEsSUFBQyxDQUFBLHVCQUFELENBQUEsQ0FBQSxDQURhO0VBQUEsQ0FiZCxDQUFBOztBQUFBLGtCQWlCQSxzQkFBQSxHQUF1QixTQUFBLEdBQUEsQ0FqQnZCLENBQUE7O0FBQUEsa0JBb0JBLHVCQUFBLEdBQXdCLFNBQUEsR0FBQTtBQUN2QixJQUFBLGFBQWEsQ0FBQyx1QkFBZCxDQUFBLENBQUEsQ0FEdUI7RUFBQSxDQXBCeEIsQ0FBQTs7QUFBQSxrQkF3QkEsT0FBQSxHQUFRLFNBQUEsR0FBQSxDQXhCUixDQUFBOztlQUFBOztJQUZELENBQUEiLCJmaWxlIjoiY29yZS9zY2VuZXMvU2NlbmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIFxuIyBBYnN0cmFjdCBTY2VuZVxuIyBcbiMgQGF1dGhvciBEYXZpZCBSb25haSAvIE1ha2lvcG9saXMuY29tIC8gQE1ha2lvNjQgXG4jIFxuXG5jbGFzcyBTY2VuZVxuXG5cdGNvbnN0cnVjdG9yOigpLT5cblx0XHRyZXR1cm5cblxuXHR1cGRhdGU6KGR0KS0+XG5cdFx0cmV0dXJuXG5cblx0cmVzaXplOigpLT5cblx0XHRyZXR1cm5cblxuXHR0cmFuc2l0aW9uSW46KCktPlxuXHRcdEBvblRyYW5zaXRpb25JbkNvbXBsZXRlKClcblx0XHRyZXR1cm5cblxuXHR0cmFuc2l0aW9uT3V0OigpLT5cblx0XHRAb25UcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHRcdHJldHVyblxuXG5cdG9uVHJhbnNpdGlvbkluQ29tcGxldGU6KCktPlxuXHRcdHJldHVyblxuXG5cdG9uVHJhbnNpdGlvbk91dENvbXBsZXRlOigpLT5cblx0XHRTY2VuZVRyYXZlbGVyLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0XHRyZXR1cm5cblxuXHRkaXNwb3NlOigpLT5cblx0XHRyZXR1cm4iXX0=