var { subscribe, dispatch, replaceState, getState } = require('pure-flux')

var routes = require('./routes')

var Router = require('pure-flux-router')({
  routes
})

export default Router


// check if HMR is enabled
if(module.hot) {
  // accept update of dependency
  module.hot.accept("./routes.js", function() {
    console.log('hot update routes', routes )

    var state = getState()

    routes = require("./routes.js");
    Router = require('pure-flux-router')({
      routes
    })

    replaceState(state)
    Router.location.redirect(location.pathname + location.search)

  });
}
