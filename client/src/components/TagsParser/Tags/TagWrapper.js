import React from 'react'

import TagsParser from './../../TagsParser'


export const TagWrapper = ({ props:{ item, index, theme, act, admin } })=>{
  return(
    <div className="tagWrapper flex wrap stretch" >
    {
      item.items.map( (el, nr)=>{
        return(
          <div
            className="wrapperItem flex"
            style={{width:item.itemWidth+"%"}}
            key={`Wrapper${index+nr}`}
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