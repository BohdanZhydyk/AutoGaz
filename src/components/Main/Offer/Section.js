import React from 'react'


export const Section = ({li})=>{
  return(
    <div className="section flex">
      <div className="line flex start">
        <span className="dot">{` - `}</span>
        <span className="li flex start">{li}</span>
      </div>
    </div>
  )
}