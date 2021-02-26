import React from 'react'
import './Header.scss'

import { Logo } from './Logo'
import { Menu } from './Menu'


const Header = ({header})=>{
  return(
    <header className="header flex">
      <Menu menu={header.menu}/>
      <Logo />
    </header>
  )
}

export default Header