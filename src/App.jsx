import React from 'react'
import { BillingInfoFilterWrapper } from 'styled/styled'
import './App.css'
import store from 'stores/store'
import { Provider } from 'react-redux'
import logo from './logo.svg'

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <BillingInfoFilterWrapper />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    </Provider>
  )
}

export default App
