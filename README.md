# Flatpickr integration for Angular (v2+)

# NOT READY YET

Flatpickr wrapper for Angular 2+
https://chmln.github.io/flatpickr/

## Table of Contents

* [Demo](#demo)
* [Quick Start](#quick-start)
  + [Angular Version](#angular-version)
  + [Module Format](#module-format)
* [Simple Example](#simple-example)
* [Styling](#styling)
* [Server-Side Paging](#server-side-paging)
* [Multiple Instances](#multiple-instances)
* [Building from source](#building-from-source)
* [Building the docs](#building-the-docs)
* [License](#license)


## Demo

Check out the live demo here: http://ngx-flatpickr-demo.surge.sh

![Demo](https://media.giphy.com/media/26FmQTavFr58Hj7W0/giphy.gif "Demo")


## Quick Start

```
npm install ngx-flatpickr flatpickr --save
```

### Angular Version

This library is built to work with **Angular 2.3.0+**, and support ahead-of-time compilation.

### Module Format

This library ships as a "flat ES module" (FESM). This means that all the JavaScript code is located in a single ES5-compatible file, but makes use of ES2015 `import` and `export` statements.

Webpack, Systemjs and Rollup all support this format and should work without problems.

A UMD bundle is also provided for systems which do not support FESM.

## Simple Example

```TypeScript
// app.module.ts

```

```TypeScript
// my.component.ts

```

## API

| Input | Default |
| --- | --- |
|  placeholder | Enter your select Placeholder text  |
|  className | Custom class |
|  options | Flatpickr options object  |

| Output | Default |
| --- | --- |
|  onChange | Fired after Flatpickr has changed  |
|  onOpen | Fired upon Flatpickr opening |
|  onClose | Fired upon Flatpickr closing |


## Building from source

Requires globally-installed node (tested with v6.x) & npm. 

```
npm install
npm run build 
```
`test` runs the Karma tests once. You can also use `test:watch` to keep tests running in watch mode.

`npm run build` creates an intermediate `/dist` folder, but the final output of the lib (which gets published to npm) is in the `/dist` folder.

## License

MIT
