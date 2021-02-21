import React from 'react'

import { TagHeader } from './../Tags/TagHeader'
import { tagsFunction } from './../Tags/tagsFunction'


const Klima = ({klima})=>{
  return(
    <div className="navContent darkStyle">
      
      <TagHeader header={klima.header} />

      {
        klima.content.map( (item, index)=>{ return tagsFunction(item, index, "klima") })
      }

    </div>
  )
}

export default Klima