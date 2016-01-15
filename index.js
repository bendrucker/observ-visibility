'use strict'

var Observ = require('observ')
var Visibility = require('document-visibility')

module.exports = ObservableVisibility

function ObservableVisibility () {
  var visibility = Visibility()
  var observable = Observ(visibility.visible())
  visibility.onChange(observable.set)

  return observable
}
