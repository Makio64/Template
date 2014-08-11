# 
# Abstract Scene
# 
# @author David Ronai / Makiopolis.com / @Makio64 
# 

class Scene extends PIXI.DisplayObjectContainer

	constructor:()->
		super()
		return

	update:(dt)->
		return

	resize:()->
		return

	transitionIn:()->
		return

	transitionOut:()->
		return

	onTransitionInComplete:()->
		return

	onTransitionOutComplete:()->
		SceneTraveler.onTransitionOutComplete()
		return

	dispose:()->
		return