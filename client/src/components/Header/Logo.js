import React from 'react'


export const Logo = ({logo, act, admin})=>{
  return(
    <div className="logo flex">

      <span onClick={ ()=> act({ addr:"admin", type:"OPEN_ADMIN_PANNEL", payload:true }) } >
        {logo.name}
      </span>

      <img src={logo.image} alt="logo" />

    </div>
  )
}