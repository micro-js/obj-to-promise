/**
 * Modules
 */

var zip = require('@micro-js/zip-obj')
var values = require('@micro-js/values')

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

  return Promise.all(promises).then(function (values) {
    return zip(keys, values)
  })
}
