import React from 'react'
import './Main.scss'

import Slider from './Slider'
import About from './About'
import Offer from './Offer'
import Install from './Install'
import Klima from './Klima'


const Main = ({main})=>{
  return(
    <main>

      <Slider about={main.slider}/>

      <About about={main.about}/>

      <Offer offer={main.offer}/>

      <Install install={main.install} />

      <Klima klima={main.klima} />
      
    </main>
  )
}

export default Main