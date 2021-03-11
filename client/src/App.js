import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'

import { getState } from './store/functions/getState'
import { footerActions } from './store/actions/footerActions'
import { adminActions } from './store/actions/adminActions'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Admin from './components/Admin'


function App() {

  let admin

  const [state, setState] = useState("")

  if(state === ""){ getState( setState ) }
  else{ state.map( (el)=>{ if(el.tag === "admin") admin = el.pannel.adminMode }) }

  console.log('state', state)

  // console.log('unix', new Date().getTime())

  const act = ({addr, type, payload})=>{
    switch(addr){

      case "footer":      footerActions( type, payload, state, setState );  break;
      case "admin":       adminActions( type, payload, state, setState );   break;

      default: break;
    }
  }


  return (
    <HashRouter className="App" >

    { state !== "" && <Header state={state} act={act} admin={admin} /> }

    { state !== "" && <Main state={state} act={act} admin={admin} /> }

    { state !== "" && <Footer state={state} act={act} admin={admin} /> }

    { state !== "" && <Admin state={state} act={act} /> }

    </HashRouter>
  )
}

export default App
