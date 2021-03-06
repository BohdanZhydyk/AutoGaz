import React from 'react'
import { NavLink } from 'react-router-dom'


export const MenuItem = ({btn})=>{
  return(
    <div className="menuItem" >

      <NavLink to={btn.to} className="menuBtn flex" >
        <span>{btn.txt}</span>
      </NavLink>

      <div className="subMenu">
      {
        btn.subMenu &&
        btn.subMenu.map( (subBtn, index)=>{
          return(
            <NavLink to={subBtn.to} className="subMenuBtn" key={`subMenuBtn${subBtn.to + index}`} >
              <span>{subBtn.txt}</span>
            </NavLink>
          )
        })
      }
      </div>

    </div>
  )
}