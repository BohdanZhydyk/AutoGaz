import React from 'react'

import { tagsFunction } from './../Tags/tagsFunction'


export const Klima = ({data})=>{
  return(
    <div className={`navContent navContent-${data.theme}`} >
    { data.object.map( (item, index)=>{ return tagsFunction(item, index, data.theme, data.name) }) }
    </div>
  )
}