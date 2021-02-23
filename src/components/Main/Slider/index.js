import React from 'react'
import './Slider.scss'

import { SliderDirBtn } from './SliderDirBtn'
import { SliderContent } from './SliderContent'


const Slider = ({slider})=>{
  return(
    <div className="navContent navContent-dark slider flex">

      <SliderDirBtn dir={`<`} />

      <SliderContent />

      <SliderDirBtn dir={`>`} />
      
    </div>
  )
}

export default Slider
