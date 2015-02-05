# [Template](https://github.com/Makio64/Template)

Boilerplate make the powerfull combo coffee/stylus/jade easy to use & deploy.

I use it a lot for my webexperiments and prototypes but it's also a good entry point for profesionnal work. If you are looking to build more complex app than just an experiments have a look to [Template-Modules](https://github.com/Makio64/Template-Modules)

### Getting started 

- Install nodejs if you don't have it : http://nodejs.org/

- Then copy the template in a folder 
- Type in the console
```shell
cd yourFolder/
npm install
```

Finally type the following command to launch the server and activate the autoreloading
```shell
gulp
```

To build the final files ( imagemin/cssmin/jsmin/htmlmin/versionning/etc.. ) :
```shell
gulp build
```

### Features
- create a local server with livereload ( reload your browser  when you change a file )
- Fast compilation for coffeescript, stylus & jade
- Sourcemap for coffeescript, stylus & jade
- include optimized .httaccess / manifest / robot
- minify / concatenate the images/js/html/css

### This template use
- Gulp | http://gulpjs.com/
- Stylus | http://learnboost.github.io/stylus/
- CoffeeScript | http://coffeescript.org/
- Jade | http://jade-lang.com/

## Versions
3.1:
- remove bower: install too much stuffs for lib like three.js/pixi 
- add common libs in js/vendors
- refractor the core

3.0:
- change grunt to gulp to be more hype :)
- remove grunt file
- improve the readme

2.0:
- grunt more clean and effiscient
- add bower
- change architecture inspired by yeoman

1.0:
- first implementation