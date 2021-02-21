import React from 'react'

import { TagHeader } from './../Tags/TagHeader'
import { tagsFunction } from './../Tags/tagsFunction'


const Credit = ({credit})=>{
  return(
    <div className="navContent lightStyle">
      
      <TagHeader header={credit.header} />

      {
        credit.content.map( (item, index)=>{ return tagsFunction(item, index, "credit") })
      }

    </div>
  )
}

export default Credit