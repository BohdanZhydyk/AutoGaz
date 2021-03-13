import React from 'react'
import './Header.scss'

import { Logo } from './Logo'
import { Menu } from './Menu'


const Header = ({ props:{ state, act, admin } })=>{
  return(
    <header className="header flex">

      <Menu props={{ menu:state.content, act, admin }} />

      { state.logo && <Logo props={{ logo:state.logo, act, adminObj:state.admin }} /> }
      
    </header>
  )
}

export default Header