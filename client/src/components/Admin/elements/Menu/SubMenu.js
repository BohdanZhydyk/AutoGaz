import React from 'react'

import { SubMenuBtn } from './SubMenuBtn'


export const SubMenu = ({object, adm})=>{
  return(
    <div className="subMenuItemPannel">
    {
      object.map( (submenu, index)=>
        <SubMenuBtn submenu={submenu} adm={adm} key={`SubMenuBtn${submenu.to + index}`} /> )
    }
    </div>
  )
}