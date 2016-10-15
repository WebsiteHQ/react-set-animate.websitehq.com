import React, { PropTypes } from 'react'
import branch from 'functionfoundry/fn/branch'
import { getStores, createStore} from 'pure-flux'
import {Link} from 'pure-flux-router'
import Nav from './Nav'
const header = React.createClass({

  render () {
    return (
      <div className="header">
        <Link to="/">
          <h1>React-Set-Animate</h1>
        </Link>
        <Nav />
      </div>
    )

  }
})

export default header
