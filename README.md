# Project template

> A project template using :
- Stylus | http://learnboost.github.io/stylus/
- CoffeeScript | http://coffeescript.org/
- Jade | http://jade-lang.com/

## Getting started

Install nodejs : http://nodejs.org/

Install the depedency, if you get an error during the installation add sudo before the command :
```shell
npm install -g bower
npm install -g jade
npm install -g stylus
npm install -g coffeescript
npm install -g grunt-cli
```

Select the lib you want for the project by editing : bower.json

Then type this commands to setup the project:
```shell
npm install && bower install
```

When everything is install, run the project with this command:
```shell
grunt
```

Build final ( cssmin/jsmin/ etc.. ) :
```shell
grunt build
```

## Inspired by
- Yeoman [template](https://github.com/yeoman)
- Floz template [template](https://github.com/floz/templates) from my friend @Floz

##2.0:
- grunt more clean and effiscient
- add bower
- change architecture inspired by yeoman
