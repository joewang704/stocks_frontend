import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import { Store, rootReducer } from './index'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Store as ReduxStore } from 'react-redux'

export function configureStore(): ReduxStore<Store> {
  const middlewares: Middleware[] = [
    thunk
  ]

  const env = process.env.NODE_ENV

  if (env !== 'production') {
    const logger = createLogger()
    middlewares.push(logger)
  }

  const composeEnhancers = (env !== 'production' &&
    typeof window === 'object' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose

  const store: ReduxStore<Store> = createStore<Store>(rootReducer, <Store>{}, composeEnhancers(
    applyMiddleware(...middlewares),
  ))

  return store
}
