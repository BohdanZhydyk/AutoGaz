import React from 'react'

import { MenuItem } from './MenuItem'


export const Menu = ({ props:{ menu } })=>{
  return(
    <nav className="navMenu flex">
    {
      menu.map( (item, index)=>
        <MenuItem props={{ item, index }} key={`MenuItem${index+item.inn}`} />
      )
    }
    </nav>
  )
}