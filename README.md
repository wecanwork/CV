# The CV of Luke S. Phillips

![Travis Build Status](https://img.shields.io/travis/lsphillips/CV/master.svg?maxAge=900)

The source code for the CV of Luke S. Phillips, which can be read here: https://lsphillips.github.io/CV/

## Development

Node is required to run the build. You can download and install the latest version here: https://nodejs.org/.

Grunt is used to facilitate the build process; you can download and install Grunt from NPM (Node Package Manager):

``` sh
npm install -g grunt-cli
```

This will also add `grunt` to your PATH.

### Building

First, you will need to install the project dependencies from NPM. Enter the following command whilst in the project directory:

``` sh
npm install
```

Finally, use the Grunt `build` task to run the build:

``` sh
grunt build
```

This will create a `build` directory containing the CV.

### Viewing

For your convenience there is the `view` Grunt task:

``` sh
grunt view
```

This will perform a standard build and open the resulting CV in your default browser where you can print or save it.
