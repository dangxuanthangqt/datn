import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import history from 'helpers/history'
import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Authorization'],
}
const pReducer = persistReducer(persistConfig, rootReducer())

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
    pReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  store.injectedReducers = {} // Reducer registry
  const persistor = persistStore(store)

  return { store, persistor }
}

export default configureStore()
