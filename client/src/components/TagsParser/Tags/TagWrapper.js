import React from 'react'

import TagsParser from './../../TagsParser'


export const TagWrapper = ({ item, index, theme, act, admin })=>{
  return(
    <div className="tagWrapper flex wrap stretch" >
    {
      item.items.map( (el)=>{
        return(
          <div
            className="wrapperItem flex"
            style={{width:item.itemWidth+"%"}}
          >
          <TagsParser 
            array={[el]}
            index={index}
            theme={theme}
            act={act}
            admin={admin}
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