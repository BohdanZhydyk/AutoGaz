import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'

import { getState } from './store/functions/getState'
import { footerActions } from './store/actions/footerActions'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  const [state, setState] = useState("")

  if(state === ""){ getState( setState ) }

  console.log('state', state)

  // console.log('unix', new Date().getTime())

  const act = ({addr, type, payload})=>{
    switch(addr){

      case "footer":      footerActions( type, payload, state, setState );  break;

      default: break;
    }
  }


  return (
    <HashRouter className="App" >

    { state !== "" && <Header state={state} act={act} /> }

    { state !== "" && <Main state={state} act={act} /> }

    { state !== "" && <Footer state={state} act={act} /> }

    </HashRouter>
  )
}

export default App
