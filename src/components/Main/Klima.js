import React from 'react'

import { tagsFunction } from './../Tags/tagsFunction'


export const Klima = ({klima})=>{
  return(
    <div className="navContent darkStyle">
    { klima.map( (item, index)=>{ return tagsFunction(item, index, "klima") }) }
    </div>
  )
}