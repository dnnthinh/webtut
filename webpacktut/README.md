# Install

```node
$ npm install --save-dev webpack
// To use the CLI
$ npm install --save-dev webpack-cli
// might install loader
$ npm install --save-dev css-loader style-loader
```

# create project

```node
// create a folder, run
$ npm init -y
// create files index.html app.js in ./
// add script in package.json
"scripts": {
"build":  "webpack --mode=development app.js -o bundle.js"
// use bundle.js in index.html, run
$ npm run build
}
```

# [webpack.config.js](https://webpack.js.org/concepts/)
