import React from 'react'
import './Footer.scss'

import { Contacts } from './Contacts'
import { Opened } from './Opened'
import { Copyright } from './Copyright'
import { CookieLine } from './CookieLine'


const Footer = ({ props:{ state, act, admin } })=>{

  let info = state.footer.info
  let opened = state.footer.opened
  let cookieline = state.footer.cookieline

  return(
    <footer>

      <div className="footerTop flex">
        <Contacts info={info} />
        <Opened opened={opened} />
      </div>

      <Copyright txt={info.lines[0].name} />

      <CookieLine props={{ cookieline, act }} />

    </footer>
  )
}

export default Footer