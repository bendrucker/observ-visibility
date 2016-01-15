'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')
var Ear = require('ear')

test(function (t) {
  var listeners = Ear()
  var Visible = proxyquire('./', {
    'document-visibility': function () {
      return {
        visible: function () {
          return true
        },
        onChange: listeners.add
      }
    }
  })
  var visible = Visible()

  t.equal(visible(), true)

  listeners(false)
  t.equal(visible(), false)

  t.end()
})
