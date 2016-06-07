# The CV of Luke S. Phillips

The source code for the CV of Luke S. Phillips.

## Development

Node is required to run the build. You can download and install the latest version here: https://nodejs.org/

Grunt is used to facilitate the build process; install Grunt through NPM (Node Package Manager) which is installed as part of the Node installation:

```
npm install -g grunt-cli
```

This will also add `grunt` to your PATH.

Next, enter the root of this project, and install the project dependencies using NPM:

```
npm install
```

And last but not least, to run the build use the Grunt `build` task:

```
grunt build
```

This will open the CV in your default browser where you can print or save it.
