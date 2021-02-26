import React from 'react'
import { NavLink } from 'react-router-dom'

import { SubMenu } from './SubMenu'


export const MenuItem = ({btn})=>{
  return(
    <div className="menuItem" >

      <NavLink to={btn.sub.to} className="menuBtn flex" >
        <span>{btn.sub.txt}</span>
      </NavLink>

      { btn.links && <SubMenu links={btn.links} /> }

    </div>
  )
}