import React from 'react'

import { TagHeader } from './../Tags/TagHeader'
import { tagsFunction } from './../Tags/tagsFunction'


const Gallery = ({gallery})=>{
  return(
    <div className="navContent lightStyle">
      
      <TagHeader header={gallery.header} />

      <div className="flex">
      {
        gallery.content.map( (item, index)=>{ return tagsFunction(item, index, "gallery") })
      }
      </div>

    </div>
  )
}

export default Gallery