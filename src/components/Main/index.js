import React from 'react'
import './Main.scss'

import Slider from './Slider'
import { About } from './About'
import { Offer } from './Offer'
import { Install } from './Install'
import { Klima } from './Klima'
import { Credit } from './Credit'
import { Gallery } from './Gallery'
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

      <Credit data={main.credit} />

      <Gallery data={main.gallery} />

      <Partners data={main.partners} />

      <Service data={main.service} />
      
    </main>
  )
}

export default Main