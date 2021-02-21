import React, { useState } from 'react'
import './App.scss'

import { header } from './store/state/header'
import { main } from './store/state/main'
import { footer } from './store/state/footer'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [state, setState] = useState({header, main, footer})

  return (
    <div className="App">

      <Header header={state.header} />

      <Main main={state.main} />

      <Footer footer={state.footer} />

    </div>
  )
}

export default App
