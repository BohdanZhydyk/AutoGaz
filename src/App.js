import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'

import { initialHeader } from './store/state/header'
import { initialMain } from './store/state/main'
import { initialFooter } from './store/state/footer'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { sliderAct } from './store/actions/sliderAct'

function App() {

  const [header, setHeader] = useState(initialHeader)
  const [main, setMain] = useState(initialMain)
  const [footer, setFooter] = useState(initialFooter)

  // console.log('header', header)
  console.log('main', main)
  // console.log('footer', footer)

  const act = ({tag, type, data})=>{
    switch(tag){
      case "slider": sliderAct( {tag, type, data}, main, setMain ); break;
      default: break;
    }
  }

  return (
    <HashRouter className="App" >

      <Header header={header} />

      <Main main={main} act={act} />

      <Footer footer={footer} />

    </HashRouter>
  )
}

export default App
