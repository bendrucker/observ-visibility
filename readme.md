# observ-visibility [![Build Status](https://travis-ci.org/bendrucker/observ-visibility.svg?branch=master)](https://travis-ci.org/bendrucker/observ-visibility)

> An observable interface to the page visibility api


## Install

```
$ npm install --save observ-visibility
```


## Usage

```js
var Visible = require('observ-visibility')
var visibile = Visible()

visible()
//=> true

// switch tabs...

visible()
//=> false
```

## API

#### `visible([fn])` -> `boolean` / `function`

##### fn

Type: `function`

An optional function to call when the visibility state changes. If no value is provided, the current visibility state is returned. If a function is provided, an unlisten function is returned.


## License

MIT © [Ben Drucker](http://bendrucker.me)
