import React from 'react'


export const TagParagraph = ({value})=>{
  return(
    <p className="tagParagraph">
      <span>{value.txt}</span>
      {
        value.a &&
        <a href={value.href} target="_blank" rel="noreferrer">
          {value.a}
        </a>
      }
    </p>
  )
}