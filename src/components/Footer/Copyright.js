import React from 'react'
import { NavLink } from 'react-router-dom'


export const Copyright = ({txt, act})=>{

  let to = "/admin"

  return(
    <NavLink to={to} className="copyright flex" key={`menuBtn${to}`} >
      <span>{`© 2020-${ new Date().getFullYear() } ${txt}`}</span>
    </NavLink>
  )
}