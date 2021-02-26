import React from 'react'
import { NavLink } from 'react-router-dom'


export const SubMenu = ({links})=>{
  return(
    <div className="subMenu">
    {
      links.map( (link, nr)=>{
        return(
          <NavLink to={link.to} className="subMenuBtn" key={`subMenuBtn${link.to}`} >
            <span>{link.txt}</span>
          </NavLink>
        )
      })
    }
    </div>
  )
}