import React from 'react'
import { NavLink } from 'react-router-dom'


export const MenuItem = ({ props:{ item, index } })=>{
  return(
    <div className="menuItem" >

      <NavLink to={item.to} className="menuBtn flex" >
        <span>{item.txt}</span>
      </NavLink>

      <div className="subMenu">
      {
        item.subMenu &&
        item.subMenu.map( (subBtn, nr)=>{
          return(
            <NavLink to={subBtn.to} className="subMenuBtn" key={`SubMenuBtn${index+nr}`} >
              <span>{subBtn.txt}</span>
            </NavLink>
          )
        })
      }
      </div>

    </div>
  )
}