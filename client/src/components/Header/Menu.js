import React from 'react'

import { MenuItem } from './MenuItem'


export const Menu = ({menu})=>{
  return(
    <nav className="navMenu flex">
    {
      menu.map( (btn, index)=>
        <MenuItem btn={btn} key={`menuItem${index}`} />
      )
    }
    </nav>
  )
}