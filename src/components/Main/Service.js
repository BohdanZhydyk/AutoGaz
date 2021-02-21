import React from 'react'

import { tagsFunction } from './../Tags/tagsFunction'


export const Service = ({service})=>{
  return(
    <div className="navContent lightStyle">
    { service.map( (item, index)=>{ return tagsFunction(item, index, "service") }) }
    </div>
  )
}