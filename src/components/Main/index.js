import React from 'react'
import './Main.scss'

import About from './About'
import Offer from './Offer'
import Install from './Install'


const Main = ({main})=>{
  return(
    <main>

      <About about={main.about}/>

      <Offer offer={main.offer}/>

      <Install install={main.install} />
      
    </main>
  )
}

export default Main