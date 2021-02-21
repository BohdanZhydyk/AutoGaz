import React from 'react'

import { tagsFunction } from './../Tags/tagsFunction'


export const Credit = ({credit})=>{
  return(
    <div className="navContent lightStyle">
    { credit.map( (item, index)=>{ return tagsFunction(item, index, "credit") }) }
    </div>
  )
}