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