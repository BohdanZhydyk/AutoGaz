import React from 'react'
import { TagsFunction } from './../Tags/TagsFunction'


export const Error = ({state, act})=>{
  return(
    <div className="error">
    {
      state.map( (el, nr)=>{
        if(el.tag === "error"){
          return <TagsFunction array={el} nr={nr} act={act} key={`TagFunction${el.tag + nr}`} />
        }
      })
    }
    </div>
  )
}