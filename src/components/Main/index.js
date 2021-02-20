import React from 'react'
import './Main.scss'

import About from './About'
import Offer from './Offer'


const Main = ({main})=>{
  return(
    <main>
      <About about={main.about}/>
      <Offer offer={main.offer}/>
    </main>
  )
}

export default Main