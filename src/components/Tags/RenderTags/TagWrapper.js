import React from 'react'

import RenderTags from './../RenderTags'


export const TagWrapper = ({ obj:{item, index, theme} })=>{
  return(
    <div className="tagWrapper flex wrap stretch">
    {
      item.items.map( (element, nr)=>{
        return(
          <div
            className="wrapperItem flex"
            style={{width:item.itemWidth+"%"}}
            key={`subtagwrapper${index+nr+item.itemWidth}`}
          >
          <RenderTags item={element} index={nr} theme={theme} name={`wrapper${element.tag}`} />
          </div>
        )
      })
    }
    </div>
  )
  // {
  //   tag:"wrapper",
  //   itemWidth:int,
  //   items: [...items]
  // }
}