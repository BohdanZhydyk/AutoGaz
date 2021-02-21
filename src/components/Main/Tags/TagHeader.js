import React from 'react'
import './Tags.scss'
import { tagsFunction } from './tagsFunction'


export const TagHeader = ({header})=>{
  return(
    <div className="tagHeader">
      <h1 className="flex">{header.txt}</h1>
      {
        header.content &&
        header.content.map( (item, index)=>{ return tagsFunction(item, index, "tagHeader") })
      }
    </div>
  )
}