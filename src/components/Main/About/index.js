import React from 'react'
import './About.scss'

import Slider from './Slider'
import Hello from './Hello'

const About = ({about})=>{
  return(
    <div className="about">
      <Slider slider={about.slider} />
      <Hello hello={about.hello} />
    </div>
  )
}

export default About