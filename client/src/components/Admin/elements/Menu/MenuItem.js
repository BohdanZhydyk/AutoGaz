import React from 'react'

import { SubMenu } from './SubMenu'
import { Header } from './Header'


export const MenuItem = ({object, adm})=>{
  return(
    <div className="menuItem">

      <Header object={object} />

      { object.subMenu && <SubMenu object={object.subMenu} adm={adm} /> }

    </div>
  )
}