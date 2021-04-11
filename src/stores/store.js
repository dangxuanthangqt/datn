import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

import history from 'helpers/history'
import createRootReducer from './reducer'

const configureStore = () => {
  let composeEnhancers = compose
  const middlewares = [routerMiddleware(history), thunkMiddleware]

  if (
    process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      maxAge: 300,
    })
  }

  const store = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  store.injectedReducers = {} // Reducer registry

  return store
}

export default configureStore()
