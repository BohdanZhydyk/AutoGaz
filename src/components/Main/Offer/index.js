import React from 'react'

import { TagHeader } from './../Tags/TagHeader'
import { tagsFunction } from './../Tags/tagsFunction'


const Offer = ({offer})=>{
  return(
    <div className="navContent darkStyle">

      <TagHeader header={offer.header} />

      {
        offer.content.map( (item, index)=>{ return tagsFunction(item, index, "offer") })
      }

    </div>
  )
}

export default Offer