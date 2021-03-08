import React from 'react'
import './Menu.scss'

import { MenuBtn } from './MenuBtn'
import { Header } from './Header'


const Menu = ({object, adm})=>{
  return(
    <div className="menuItemPannel">

      <MenuBtn object={object} adm={adm} />

      { object.active && <Header object={object} adm={adm} /> }

    </div>
  )
}

export default Menu