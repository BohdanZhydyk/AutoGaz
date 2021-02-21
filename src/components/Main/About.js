import React from 'react'

import { tagsFunction } from './../Tags/tagsFunction'


export const About = ({about})=>{
  return(
    <div className="navContent lightStyle">
    { about.map( (item, index)=>{ return tagsFunction(item, index, "about") }) }
    </div>
  )
}