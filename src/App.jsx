import React from 'react'
import store from 'stores/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from 'styles/global'
import ToastifyContainer from 'components/ToastifyContainer'
import { PersistGate } from 'redux-persist/integration/react'
import Router from 'routes/router'

function App() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ToastifyContainer />
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
