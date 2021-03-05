import React from 'react'

import RenderTags from './../RenderTags'


export const TagWrapper = ({ item, theme, index, act })=>{
  return(
    <div className="tagWrapper flex wrap stretch" key={`Wrapper${index}`} >
    {
      item.items.map( (element, nr)=>{
        return(
          <div
            className="wrapperItem flex"
            style={{width:item.itemWidth+"%"}}
            key={`subtagwrapper${index+nr+item.itemWidth}`}
          >
          <RenderTags
            item={element}
            theme={theme}
            index={nr}
            name={`wrapper${element.tag}`}
            act={act}
          />
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