
# object-to-promise

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert an object to a promise.

## Installation

    $ npm install @micro-js/object-to-promise

## Usage

```js
var objectToPromise = require('object-to-promise')

objectToPromise({
  1: Promise.resolve(1),
  2: Promise.resolve(2)
}).then(function (obj) {
  console.log(obj) // => { 1: 1, 2: 2 }
})

```

## API

### objectToPromise(object)

- `object` - an object of "yieldables"

**Returns:** a promise

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/object-to-promise.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/object-to-promise
[git-image]: https://img.shields.io/github/tag/micro-js/object-to-promise.svg
[git-url]: https://github.com/micro-js/object-to-promise
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/object-to-promise.svg?style=flat-square
[npm-url]: https://npmjs.org/package/object-to-promise
