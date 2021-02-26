import React from 'react'
import './Main.scss'

import Slider from './Slider'
import { About } from './About'
import { Offer } from './Offer'
import { Install } from './Install'
import { Klima } from './Klima'
import { Gallery } from './Gallery'
import { Credit } from './Credit'
import { Partners } from './Partners'
import { Service } from './Service'


const Main = ({main})=>{
  return(
    <main>

      <Slider object={main.slider}/>

      <About data={main.about}/>

      <Offer data={main.offer}/>

      <Install data={main.install} />

      <Klima data={main.klima} />

      <Gallery data={main.gallery} />

      <Credit data={main.credit} />

      <Partners data={main.partners} />

      <Service data={main.service} />
      
    </main>
  )
}

export default Main