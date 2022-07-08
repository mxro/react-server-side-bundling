# React Server Side Bundling

This repository demonstrates how to create a bundle using [esbuild](https://esbuild.github.io/) and [webpack](https://webpack.js.org/) for a script that creates a server-side rendering of a React page.

This would for instance be required when developing a Lambda function that dynamically renders a page using React.

See related issues [esbuild#2377](https://github.com/evanw/esbuild/issues/2377), [react#24841](https://github.com/facebook/react/issues/24841), [goldstack#43](https://github.com/goldstack/goldstack/issues/43)

## Usage

To generate the bundles in the `esbuild` or `webpack` folders, run the following commands:

```
npm i
npm run bundle
```

The generated bundle will be in the file `dist/bundle.js`.

## esbuild Configuration

The following esbuild configuration is used for generating the bundle ([bundle.js](https://github.com/mxro/react-server-side-bundling/blob/master/esbuild/bundle.js)): 

```javascript
  const res = await esbuild.build({
    entryPoints: ['./index.jsx'],
    bundle: true,
    minify: true,
    platform: 'node',
    format: 'cjs',
    treeShaking: true,
    define: { 'process.env.NODE_ENV': '"production"' },
    target: 'node16.0',
    metafile: true,
    outfile: './dist/bundle.js',
    write: true,
  });
```

## Webpack Configuration

The following webpack config is used for generating the bundle using webpack ([webpack.config.json](https://github.com/mxro/react-server-side-bundling/blob/master/webpack/webpack.config.js))

```javascript
module.exports = {
 entry: './index.jsx',
 mode: 'production',
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'bundle.js'
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     }
   ]
 },
}
```

## Findings

Using the correct configuration for both esbuild and webpack, efficient bundles are created:

_Bundle size_

- Webpack: 75 kb
- esbuild: 83 kb

