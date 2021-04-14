import React, { useEffect } from 'react'
import store from 'stores/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyle from 'styles/global'
import ToastifyContainer from 'components/ToastifyContainer'
import { toastDefault } from 'helpers/toastify'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  useEffect( () => {
    console.log( process.env.NODE_ENV )
    setInterval( () => {
      toastDefault( 'Welcome' )
    }, 5000 )
    return () => {
      clearInterval( toastDefault( 'Welcome' ) )
    }
  }, [] )
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ToastifyContainer />
          <div className="App" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
