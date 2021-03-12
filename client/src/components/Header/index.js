import React from 'react'
import './Header.scss'

import { Logo } from './Logo'
import { Menu } from './Menu'


const Header = ({state, act, admin})=>{
  return(
    <header className="header flex">

      <Menu menu={state.content} act={act} admin={admin} />

      { state.logo && <Logo logo={state.logo} act={act} adminObj={state.admin} /> }
      
    </header>
  )
}

export default Header