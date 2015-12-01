/**
 * Modules
 */

var zip = require('@micro-js/zip-obj')
var values = require('@micro-js/values')
var curry = require('@micro-js/curry')

/**
 * Expose objectToPromise
 */

module.exports = objectToPromise['default'] = objectToPromise

/**
 * Convert an object to a promise resolving vals with `toPromise`.
 * Uses `Promise.all()` internally.
 *
 * @param {Object} obj
 * @return {Promise}
 * @api private
 */

function objectToPromise (obj) {
  var keys = Object.keys(obj)
  var promises = values(obj)
  return Promise.all(promises).then(curry(zip)(keys))
}
