import React from 'react'


export const Logo = ({logo, act})=>{

  return(
    <div className="logo flex">
      <span>{logo.name}</span>
      <img src={logo.image} alt="logo" />
    </div>
  )
}