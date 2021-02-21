import React from 'react'

import { TagHeader } from './../Tags/TagHeader'
import { tagsFunction } from './../Tags/tagsFunction'


const Service = ({service})=>{
  return(
    <div className="navContent lightStyle">
      
      <TagHeader header={service.header} />

      <div className="flex">
      {
        service.content.map( (item, index)=>{ return tagsFunction(item, index, "service") })
      }
      </div>

    </div>
  )
}

export default Service