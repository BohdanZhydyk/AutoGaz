import React from 'react'
import './Menu.scss'

import { MenuBtn } from './MenuBtn'
import { MenuItem } from './MenuItem'


const Menu = ({object, adm})=>{
  return(
    <div className="menuPannel">

      <MenuBtn object={object} adm={adm} />

      { object.active && <MenuItem object={object} adm={adm} /> }

    </div>
  )
}

export default Menu