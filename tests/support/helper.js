import jsdom from 'jsdom'
import chai from 'chai'

import plugin from 'chai-enzyme'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win
global.navigator = win.navigator

global.React = require('react')
global.expect = require('chai').expect
global.createTest = require('./createTest').default

chai.use(plugin())
