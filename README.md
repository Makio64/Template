# Project template

> A project template using :
- Stylus | http://learnboost.github.io/stylus/
- CoffeeScript | http://coffeescript.org/
- Jade | http://jade-lang.com/

## Getting started

Just type this command:
```shell
npm install
```
And then:
```shell
grunt
```
And you are ready to go.

## Change the server port
Open GruntFile.js and simply change serverPort.

## ImageOptim
grunt-imagemin is used to do this process.
```shell
grunt imageoptim
```
To launch the task.

## Credits
Base on the [template](https://github.com/floz/templates) of my friend @Floz

Differences:
- Replacement of Compass by Stylus(+nib plugin) to avoid the dependency to ruby
- Default grunt task create a local server using [connect](https://github.com/gruntjs/grunt-contrib-connect) with [livereload](http://livereload.com/) enable
- RequestAnimationFrame is include.
- Main class manage the global update, deltaTime implementation and blur/focus/resize of the windows.