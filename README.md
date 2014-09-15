# [Project template by Makio64](https://github.com/Makio64/Template)

This template make the powerfull combo coffee/stylus/jade easy to test & deploy.

I use it a lot for my webexperiments and prototypes but it's also a very good entry point for profesionnal work.

### What the template do for you
>- create a local server with livereload ( reload your browser  when you change a file )
- compile your stylus / jade / coffeescript
- give a nice, light and basic structure for your coffee/stylus development
- sourcemap for stylus & coffeescript for easy debugging
- notify the compilation success/error via growl
- include optimized .httaccess / manifest / robot for your webapp
- install new bower depedency automatically
- inject the lib you want with bower to your html
- minify the images/js/html/css for  you
- concatenate your css & js


### This template use
>- Gulp | http://gulpjs.com/
- Bower | http://bower.io/
- Stylus | http://learnboost.github.io/stylus/
- CoffeeScript | http://coffeescript.org/
- Jade | http://jade-lang.com/


## Getting started

Install nodejs if you don't have it : http://nodejs.org/

Then copy the template in a folder and type in the console
```shell
npm install
```

By default this package include a lot of lib js. edit "bower.json" to change it
If you want more lib check : http://bower.io/search/

When you are ready to run the project :
```shell
gulp
```

Ahoy ! You should then see your html page running on a local server :)
NB : the first time can be longer as you need to download the js lib you select from bower ( jquery/threejs/etc.. )
To stop the server crtl+c on the terminal

To build the final files ( imagemin/cssmin/jsmin/htmlmin/versionning/etc.. ) :
```shell
gulp build
```

##Versions
3.0:
- change grunt to gulp to be more hype :)
- move the grunt file to /grunt for the nostalgic.

2.0:
- grunt more clean and effiscient
- add bower
- change architecture inspired by yeoman

1.0:
- first implementation