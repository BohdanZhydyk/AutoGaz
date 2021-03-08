import React from 'react'
import './Header.scss'

import { Logo } from './Logo'
import { Menu } from './Menu'

import Admin from './../Admin'


const Header = ({state, act})=>{

  let adminMode
  state.map( (el)=>{
    if(el.tag === "footer") adminMode = el.admin.pannel.adminMode
  })

  let logo
  let menu = []
  state.map( (el)=>{ if(el.tag === "logo") logo = el })
  state.map( (el)=>{ if(el.tag === "menu") menu.push(el) })

  return(
    <>
    {
      !adminMode
      ?
      <header className="header flex">

        <Menu menu={menu} act={act} />

        { logo && <Logo logo={logo} act={act} /> }
        
      </header>
      :
      <Admin state={state} />
    }
    </>
    
  )
}

export default Header