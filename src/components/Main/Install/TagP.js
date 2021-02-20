import React from 'react'


export const TagP = ({value})=>{
  return(
    <p>
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