import React from 'react'

import { tagsFunction } from './../Tags/tagsFunction'


export const Offer = ({offer})=>{
  return(
    <div className="navContent darkStyle">
    { offer.map( (item, index)=>{ return tagsFunction(item, index, "offer") }) }
    </div>
  )
}