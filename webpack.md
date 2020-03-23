# Webpack
- webpack.js is a module bundler. It generates so called 'static assets' (which can be used by browsers) from modules. 
- It is like browserify but is more advanced as it can also act as a task runner. Browsers, for example, don't understand keywords like `require` or `import`. Webpack allows you to use files containing such words. It bundles modules and their dependencies and the dependencies of their dependencies to what the browser understands
- It uses so-called **loaders** which seem similar to gulp plugins. Official documentation says they are used to 'preprocess files'.

## Simple webpack:
- Webpack requires a single entry point as an input. You might specify a destination bundle file where the generated code is placed. Let's bundle the following file and its dependency:

### 1.Dependency (hello.js):
```javascript
module.exports = 'Hello, World!';
```

### 2.File (app.js):
```javascript
const greeting = require('./hello.js')
alert(greeting);
```
- Bundling this would be done with the following command in the terminal:
```sh
webpack app.js
```
- To avoid running this command every time code in the entry point file or any of its dependencies, you supply the **`--watch`** option which allows automatic running of webpack bundling ever time a file changes as in:
```
webpack app.js --watch
```

## A CSS-in-JS Example Using Webpack:
- After installing the `style-loader` and `css-loader` loaders, you can start using css in javascript using the following syntax:
```javascript
require('!style-loader!css-loader!./styles.css');
```
- I am of the opinion of keeping CSS separate from the rest of the code, but whatever! As you can see, the css file name is preceded with an exclamation mark and the style and css loaders which are in turn each preceded by exclamation marks.

## Configuration:
0- Configuring a webpack project helps you separate configuration from actual code. Instead of specifying the entry point or mixing loader imports with your application code, you can put that in a `webpack.config.js` file, which would have the following general structure:
```javascript
module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js' 
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
			}
		]
	}
}
```


