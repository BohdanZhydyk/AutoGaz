import React from 'react'

import { tagsFunction } from './../Tags/tagsFunction'


export const Gallery = ({gallery})=>{
  return(
    <div className="navContent lightStyle">
    { gallery.map( (item, index)=>{ return tagsFunction(item, index, "gallery") }) }
    </div>
  )
}