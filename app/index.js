import React from 'react'
import { render } from 'react-dom'
import Router from './router'

var Page = require( './page').default

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Page />
), document.getElementById('root'))


// check if HMR is enabled
if(module.hot) {

  // accept itself
  module.hot.accept();

}
