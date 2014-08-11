# 
# Manage transition betweenScene
# 
# @usage SceneTraveler.to( new Scene() )
# @author David Ronai / Makiopolis.com / @Makio64 
# 

class SceneTraveler

	@currentScene 	= null
	@nextScene		= null

	@init = ()->
		return


	@to = (scene)->
		@nextScene = scene
		if @currentScene != null
			@currentScene.transitionOut()
		else
			@onTransitionOutComplete()
		return


	@onTransitionOutComplete = ()->
		if @currentScene != null
			Stage2d.stage.removeChild(@currentScene)
		
		@currentScene = @nextScene
		@currentScene.transitionIn()
		console.log @currentScene
		Stage2d.stage.addChild(@currentScene)
		return


	@resize = ()->
		if @currentScene != null
			@currentScene.resize()
		if @nextScene != null
			@nextScene.resize()
		return