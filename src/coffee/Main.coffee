#---------------------------------------------------------- Global var

main = null

#---------------------------------------------------------- Class Main

class Main

	dt 				: 0
	lastTime 		: 0
	pause 			: false

	constructor:()->
		@pause = false
		@lastTime = Date.now()
		window.focus()
		requestAnimationFrame( @update )
		return

	update:()=>
		t = Date.now()
		dt = t - @lastTime
		@lastTime = t

		if @pause then return

		#update logic here

		requestAnimationFrame( @update )
		return

	resize:()=>
		width 	= window.innerWidth
		height 	= window.innerHeight
		return


#---------------------------------------------------------- on Document Ready

document.addEventListener('DOMContentLoaded', ()->
	main = new Main()
	
	window.onblur = (e)->
		main.pause = true
		cancelAnimationFrame(main.animate)

	window.onfocus = ()->
		requestAnimationFrame( main.update )
		main.lastTime = Date.now()
		main.pause = false

	window.onresize = ()->
		main.resize()

	return
)