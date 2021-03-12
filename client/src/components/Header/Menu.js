import React from 'react'

import { MenuItem } from './MenuItem'


export const Menu = ({menu, act, admin})=>{
  return(
    <nav className="navMenu flex">
    {
      menu.map( (btn, index)=>
        <MenuItem btn={btn} act={act} admin={admin} key={`menuItem${index}`} />
      )
    }
    </nav>
  )
}