import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'


export const Menu = ({menu})=>{
  return(
    <nav className="navMenu flex">
    {
      menu.map( (btn, index)=>{
        return(
          <div className="menuItem" key={`menuBtn${index}`}>
            <NavLink to={btn.sub.to} className="menuBtn flex" >
              <span>{btn.sub.txt}</span>
            </NavLink>
            {
              btn.links &&
              <div className="subMenu">
              {
                btn.links.map( (link, nr)=>{
                  return(
                    <NavLink to={link.to} className="subMenuBtn" key={`subMenuBtn${link.to}`} >
                      <span>{link.txt}</span>
                    </NavLink>
                  )
                })
              }
              </div>
            }
          </div>
        )
      })
    }
    </nav>
  )
}