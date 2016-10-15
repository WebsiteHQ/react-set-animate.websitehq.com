// Hack until System.import is ready in webpack 2
function _load(name) {
  return (...args) => new Promise( (resolve, reject) => {
    console.log('load page', name)
    switch(name) {
      case '../pages/Welcome':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('../pages/Welcome').default }))
      return
      case '../pages/EasingExamples':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('../pages/EasingExamples').default }))
      return
      case '../pages/SlideIn':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('../pages/SlideIn').default }))
      return
      case '../pages/SlideOut':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('../pages/SlideOut').default }))
      return
      case '../pages/MorphColor':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('../pages/MorphColor').default }))
      return
      default:
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('../pages/PageNotFound').default }))
      return
    }
  })
}

let System = { load: _load }

let routes = [{
  path: '/',
  load: System.load( '../pages/Welcome' )
}, {
  path: '/easing',
  load: System.load( '../pages/EasingExamples' )
}, {
  path: '/slidein',
  load: System.load( '../pages/SlideIn' )
}, {
  path: '/slideout',
  load: System.load( '../pages/SlideOut' )
}, {
  path: '/tweencolor',
  load: System.load( '../pages/MorphColor' )
}, {
  path: '*',
  load: System.load( '../pages/PageNotFound' )
}]

module.exports = routes
