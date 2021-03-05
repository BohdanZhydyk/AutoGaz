import React from 'react'
import { TagsFunction } from './../Tags/TagsFunction'


export const Cookie = ({state, act})=>{
  return(
    <div className="cookie">
    {
      state.map( (el, nr)=>{
        if(el.tag === "cookie"){
          return <TagsFunction array={el} nr={nr} act={act} key={`TagFunction${el.tag + nr}`} />
        }
      })
    }
    </div>
  )
}