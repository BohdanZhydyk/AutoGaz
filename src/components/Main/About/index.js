import React from 'react'

import { TagHeader } from './../Tags/TagHeader'
import { tagsFunction } from './../Tags/tagsFunction'


const About = ({about})=>{
  return(
    <div className="navContent lightStyle">

      <TagHeader header={about.header} />

      {
        about.content.map( (item, index)=>{ return tagsFunction(item, index, "about") })
      }
      
    </div>
  )
}

export default About