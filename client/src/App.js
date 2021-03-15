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


import { useResizeDetector } from 'react-resize-detector'


function App() {

  let admin

  const [state, setState] = useState("")

  if(state === ""){ getState( state, setState ) }
  else{ admin = state.admin.adminMode }

  console.log('state', state)

  // console.log('unix', new Date().getTime())

  const act = ({addr, type, payload})=>{
    switch(addr){

      case "footer":      footerActions( type, payload, state, setState );  break;
      case "admin":       adminActions( type, payload, state, setState );   break;

      default: break;
    }
  }

  let size = {
    width:false,
    height:false,
    device:false,
    orientation:false,
  }

  const { width, height, ref } = useResizeDetector()

  let getSize = (width, height)=>{

    let device = "ESD"
    if( width >= 600 ){ device = "SD" }
    if( width >= 768 ){ device = "MD" }
    if( width >= 992 ){ device = "LD" }
    if( width > 1200 ){ device = "ELD" }

    let orientation = "landscape"
    if(width > height){ orientation = "landscape" }
    else{ orientation = "portrait" }

    size = {
      width,
      height,
      device,
      orientation
    }

  }
  
  
  return (
    <HashRouter className="App" >

    <div className="fullScreenPannel" ref={ref}></div>

      { getSize(width, height) }

      { admin && <span className="size">{`${size.device} ${size.orientation} ${size.width}px X ${size.height}px`}</span> }



      { state !== "" && <Header props={{ state, act, admin }} /> }

      { state !== "" && <Main props={{ state, act, admin }} /> }

      { state !== "" && <Footer props={{ state, act, admin }} /> }

      { state !== "" && <Admin props={{ state, act }} /> }

    </HashRouter>
  )
}

export default App
