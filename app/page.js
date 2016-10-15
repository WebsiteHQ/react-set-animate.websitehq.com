import React, { PropTypes } from 'react'
import { dispatch, subscribe, replaceState, getState, getStores } from 'pure-flux'
import Router from './router'
var { Container } = Router

window.dispatch = dispatch;
window.getState = getState;
window.getStores = getStores;

require('../styles/app.scss')

const App = React.createClass({
  componentDidMount() {
    console.log('did mount')

    // subscribe to all events
    subscribe( (state, action) => {
      console.log('state change', action, state)
    })

    Router.location.redirect(location.pathname + location.search)
  },
  render () {
    let left = 0;
    return (
      <Container />
    )
  }
})

export default App
