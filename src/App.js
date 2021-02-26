import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom'
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
    <HashRouter className="App" >

      <Header header={state.header} />

      <Main main={state.main} />

      <Footer footer={state.footer} />

    </HashRouter>
  )
}

export default App
