import React from 'react'

import { tagsFunction } from './../Tags/tagsFunction'


export const Install = ({install})=>{
  return(
    <div className="navContent lightStyle">
    { install.map( (item, index)=>{ return tagsFunction(item, index, "install") }) }
    </div>
  )
}