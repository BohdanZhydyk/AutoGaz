import React from 'react'


export const TagTheme = ({value})=>{
  return(
    <h2 className="tagTheme">
      <div className="blueLine"></div>
      <div className="text flex">
        <span>{value.txt}</span>
      </div>
    </h2>
  )
}