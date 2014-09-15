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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvc2NlbmVzL1NjZW5lLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxJQUFBLEtBQUE7RUFBQTtpU0FBQTs7QUFBQTtBQUVDLDBCQUFBLENBQUE7O0FBQVksRUFBQSxlQUFBLEdBQUE7QUFDWCxJQUFBLHFDQUFBLENBQUEsQ0FBQTtBQUNBLFVBQUEsQ0FGVztFQUFBLENBQVo7O0FBQUEsa0JBSUEsTUFBQSxHQUFPLFNBQUMsRUFBRCxHQUFBLENBSlAsQ0FBQTs7QUFBQSxrQkFPQSxNQUFBLEdBQU8sU0FBQSxHQUFBLENBUFAsQ0FBQTs7QUFBQSxrQkFVQSxZQUFBLEdBQWEsU0FBQSxHQUFBLENBVmIsQ0FBQTs7QUFBQSxrQkFhQSxhQUFBLEdBQWMsU0FBQSxHQUFBLENBYmQsQ0FBQTs7QUFBQSxrQkFnQkEsc0JBQUEsR0FBdUIsU0FBQSxHQUFBLENBaEJ2QixDQUFBOztBQUFBLGtCQW1CQSx1QkFBQSxHQUF3QixTQUFBLEdBQUE7QUFDdkIsSUFBQSxhQUFhLENBQUMsdUJBQWQsQ0FBQSxDQUFBLENBRHVCO0VBQUEsQ0FuQnhCLENBQUE7O0FBQUEsa0JBdUJBLE9BQUEsR0FBUSxTQUFBLEdBQUEsQ0F2QlIsQ0FBQTs7ZUFBQTs7R0FGbUIsSUFBSSxDQUFDLHVCQUF6QixDQUFBIiwiZmlsZSI6ImNvcmUvc2NlbmVzL1NjZW5lLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyBcbiMgQWJzdHJhY3QgU2NlbmVcbiMgXG4jIEBhdXRob3IgRGF2aWQgUm9uYWkgLyBNYWtpb3BvbGlzLmNvbSAvIEBNYWtpbzY0IFxuIyBcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBQSVhJLkRpc3BsYXlPYmplY3RDb250YWluZXJcblxuXHRjb25zdHJ1Y3RvcjooKS0+XG5cdFx0c3VwZXIoKVxuXHRcdHJldHVyblxuXG5cdHVwZGF0ZTooZHQpLT5cblx0XHRyZXR1cm5cblxuXHRyZXNpemU6KCktPlxuXHRcdHJldHVyblxuXG5cdHRyYW5zaXRpb25JbjooKS0+XG5cdFx0cmV0dXJuXG5cblx0dHJhbnNpdGlvbk91dDooKS0+XG5cdFx0cmV0dXJuXG5cblx0b25UcmFuc2l0aW9uSW5Db21wbGV0ZTooKS0+XG5cdFx0cmV0dXJuXG5cblx0b25UcmFuc2l0aW9uT3V0Q29tcGxldGU6KCktPlxuXHRcdFNjZW5lVHJhdmVsZXIub25UcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHRcdHJldHVyblxuXG5cdGRpc3Bvc2U6KCktPlxuXHRcdHJldHVybiJdfQ==