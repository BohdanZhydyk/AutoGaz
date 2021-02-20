import React from 'react'


export const Theme = ({theme})=>{
  return(
    <h2 className="theme">
      <div className="blueLine"></div>
      <div className="text flex">
        <span>{theme}</span>
      </div>
    </h2>
  )
}
