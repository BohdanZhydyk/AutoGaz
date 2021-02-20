import React, { useState } from 'react'
import './App.scss'
import { initialState } from './state'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [state, setState] = useState(initialState)

  return (
    <div className="App">

      <Header header={state.header} />

      <Main main={state.main} />

      <Footer footer={state.footer} />

    </div>
  )
}

export default App
