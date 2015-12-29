import { createStore, applyMiddleware, compose } from 'redux'
import DevTools from '../containers/DevTools'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const finalCreateStore = compose(
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
