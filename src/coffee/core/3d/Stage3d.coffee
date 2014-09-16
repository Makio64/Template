# 
# Stage3d for three.js with every basics you need
# @author David Ronai / Makiopolis.com / @Makio64 
# 
class Stage3d

	@camera = null
	@cameraTarget = null
	@scene = null
	@projector = null
	@renderer = null

	@init = (options)->
		w = window.innerWidth
		h = window.innerHeight

		@camera = new THREE.PerspectiveCamera( 40, w / h, 1, 10000 )
		@camera.position.z = 15000
		@cameraTarget = new THREE.Vector3(0,0,400)

		@scene = new THREE.Scene()
		@projector = new THREE.Projector()

		transparent = options.transparent||false
		antialias = options.antialias||false

		@renderer = new THREE.WebGLRenderer({alpha:transparent,antialias:antialias})
		@renderer.setSize( w, h )

		document.body.appendChild(@renderer.domElement)
		return

	@add = (obj)->
		@scene.add(obj)
		return

	@render = ()->
		@camera.position.x += (@cameraTarget.x-@camera.position.x)*0.05
		@camera.position.y += (@cameraTarget.y-@camera.position.y)*0.05
		@camera.position.z += (@cameraTarget.z-@camera.position.z)*0.05

		@camera.lookAt(@scene.position)
		Stage3d.renderer.render(@scene, @camera)
		return

	@resize = ()->
		if @renderer
			@camera.aspect = window.innerWidth / window.innerHeight
			@camera.updateProjectionMatrix()
			@renderer.setSize( window.innerWidth, window.innerHeight )
		return