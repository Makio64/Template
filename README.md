# [Project template by Makio64](https://github.com/Makio64/Template)

This template make the combo coffee/stylus/jade easy to test & deploy.
I use it a lot for my webexperiments and prototype but it's also a very good point entry for profesionnal works.

> What the template do for you:
- create a local server with livereload ( reload your browser  when you change a file )
- compile your stylus / jade / coffeescript
- sourcemap for stylus & coffeescript for easy debugging
- notify the compilation success/error via growl
- include optimized .httaccess / manifest / robot for your webapp
- install new bower depedency automatically
- inject the lib you want with bower to your html
- minify the images/js/html/css for you
- concatenate your css & js

> What the template use :
- Gulp | http://gulpjs.com/
- Bower | http://bower.io/
- Stylus | http://learnboost.github.io/stylus/
- CoffeeScript | http://coffeescript.org/
- Jade | http://jade-lang.com/


## Getting started

Install nodejs if you don't have it : http://nodejs.org/

Then just type
```shell
npm install
```

By default this package include tons of lib js. edit "bower.json" to change it
If you want more lib check : http://bower.io/search/

When you are ready run the project with this magic command:
```shell
gulp
```

Aya ! You should then see your html page running on a local server :)
NB : the first time can be longer as you need to download the js lib you select from bower ( jquery/threejs/etc.. )
To stop the server crtl+c on the terminal

## Build the final files

Build the final ( imagemin/cssmin/jsmin/htmlmin/versionning/etc etc.. ) :
```shell
gulp build
```

##Versions
>3.0:
- change grunt to gulp to be more hype :)
- move the grunt file to /grunt for the nostalgic.

>2.0:
- grunt more clean and effiscient
- add bower
- change architecture inspired by yeoman

>1.0:
- first implementation