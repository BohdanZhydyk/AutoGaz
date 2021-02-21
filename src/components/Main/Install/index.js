import React from 'react'

import { TagHeader } from './../Tags/TagHeader'
import { tagsFunction } from './../Tags/tagsFunction'


const Install = ({install})=>{
  return(
    <div className="navContent lightStyle">

      <TagHeader header={install.header} />

      {
        install.content.map( (item, index)=>{ return tagsFunction(item, index, "install") })
      }

    </div>
  )
}

export default Install