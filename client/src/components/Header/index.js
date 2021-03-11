import React from 'react'
import './Header.scss'

import { Logo } from './Logo'
import { Menu } from './Menu'


const Header = ({state, act, admin})=>{

  let logo
  let menu = []
  state.map( (el)=>{ if(el.tag === "logo") logo = el })
  state.map( (el)=>{ if(el.tag === "menu") menu.push(el) })

  return(
    <header className="header flex">

      <Menu menu={menu} act={act} />

      { logo && <Logo logo={logo} act={act} admin={admin} /> }
      
    </header>
  )
}

export default Header