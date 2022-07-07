# React Server Side Bundling

This repository demonstrates how to create a bundle using [esbuild](https://esbuild.github.io/) and [webpack](https://webpack.js.org/) for a script that creates a server-side rendering of a React page.

This would for instance be required when developing a Lambda function that dynamically renders a page using React.

## Usage

To generate the bundles in the `esbuild` or `webpack` folders, run the following commands:

```
npm i
npm run bundle
```

The generated bundle will be in the file `dist/bundle.js`.

## Findings

Using the latest versions of esbuild and webpack 5, it seems that webpack creates a much smaller bundle.

_Bundle size_

- Webpack: 75 kb
- esbuild: 284 kb

This seems to be due esbuild including both development and production versions of React libraries as well as `legacy` versions for `react-dom-server`:

- `node_modules/react/cjs/react.production.min.js`
- `node_modules/react/cjs/react.development.js`
- `node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js`
- `node_modules/react-dom/cjs/react-dom-server.node.production.min.js`
- `node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js`  
- `node_modules/react-dom/cjs/react-dom-server.node.development.js`
