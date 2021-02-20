import React from 'react'
import './Main.scss'

import About from './About'


const Main = ({main})=>{
  return(
    <main>
      <About about={main.about}/>
    </main>
  )
}

export default Main