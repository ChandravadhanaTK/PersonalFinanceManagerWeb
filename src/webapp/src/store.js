import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise-middleware'
import reducer from './reducers'

const middleware = [reduxPromise(), thunk];
if (process.env.NODE_ENV !== 'production') middleware.push(logger)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)