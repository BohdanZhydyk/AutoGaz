import React from 'react'

import { tagsFunction } from './../Tags/tagsFunction'


export const Partners = ({partners})=>{
  return(
    <div className="navContent darkStyle">
    { partners.map( (item, index)=>{ return tagsFunction(item, index, "partners") }) }
    </div>
  )
}