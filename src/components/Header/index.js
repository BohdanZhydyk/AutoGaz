import React from 'react'
import './Header.scss'

import { Logo } from './Logo'
import { Menu } from './Menu'


const Header = ({header})=>{
  return(
    <header className="header flex">
      <Logo />
      <Menu menu={header.menu}/>
    </header>
  )
}

export default Header