import React from 'react'
import './Main.scss'

import Slider from './Slider'
import About from './About'
import Offer from './Offer'
import Install from './Install'
import Klima from './Klima'
import Credit from './Credit'
import Gallery from './Gallery'
import Partners from './Partners'
import Service from './Service'


const Main = ({main})=>{
  return(
    <main>

      <Slider about={main.slider}/>

      <About about={main.about}/>

      <Offer offer={main.offer}/>

      <Install install={main.install} />

      <Klima klima={main.klima} />

      <Credit credit={main.credit} />

      <Gallery gallery={main.gallery} />

      <Partners partners={main.partners} />

      <Service service={main.service} />
      
    </main>
  )
}

export default Main