import React from 'react'

import { TagHeader } from './../Tags/TagHeader'
import { tagsFunction } from './../Tags/tagsFunction'


const Partners = ({partners})=>{
  return(
    <div className="navContent darkStyle">
      
      <TagHeader header={partners.header} />

      {
        partners.content.map( (item, index)=>{ return tagsFunction(item, index, "service") })
      }

    </div>
  )
}

export default Partners