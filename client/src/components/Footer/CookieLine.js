import React from 'react'
import { NavLink } from 'react-router-dom'


export const CookieLine = ({cookieline, act})=>{

  const btnClick = ()=> act({ addr:"footer", type:"COOKIES_ACCEPT", payload:false })

  return(
    <div className="cookie flex" >
    {
      cookieline.active &&
      <>

        <span>{cookieline.txt}</span>

        <NavLink to={cookieline.link.to} >
          <span>{cookieline.link.txt}</span>
        </NavLink>

        <span className="btn flex" onClick={ ()=> btnClick() } >
          {cookieline.btn}
        </span>

      </>
    }
    </div>
  )
}