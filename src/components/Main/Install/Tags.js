import React from 'react'

import { TagH3 } from './TagH3'
import { TagLi } from './TagLi'
import { TagP } from './TagP'
import { Simulator } from './Simulator'


export const Tags = ({tags})=>{
  return(
    <div className="tags">
    {
      tags.map( (item, index)=>{
        switch(item.tag){
          case "h3":
            return <TagH3 value={item.value} key={`installTagH3${index}`} />
          case "li":
            return <TagLi value={item.value} key={`installTagLi${index}`} />
          case "p":
            return <TagP value={item.value} key={`installTagParagraph${index}`} />
          case "simulator":
            return <Simulator value={item.value} />
          default: return <></>
        }
      })
    }
    </div>
  )
}