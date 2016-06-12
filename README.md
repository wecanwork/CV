# The CV of Luke S. Phillips

![Travis Build Status](https://travis-ci.org/lsphillips/CV.svg?branch=master)

The source code for the CV of Luke S. Phillips, which can be read here: https://lsphillips.github.io/CV/

## Development

Node is required to run the build. You can download and install the latest version here: https://nodejs.org/

Grunt is used to facilitate the build process; install Grunt through NPM (Node Package Manager) which is installed as part of the Node installation:

``` sh
npm install -g grunt-cli
```

This will also add `grunt` to your PATH.

Next, enter the root of this project, and install the project dependencies using NPM:

``` sh
npm install
```

And last but not least, to run the build use the Grunt `build` task:

``` sh
grunt build
```

This will open the CV in your default browser where you can print or save it.
