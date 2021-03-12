import React from 'react'
import './Footer.scss'

import { Contacts } from './Contacts'
import { Opened } from './Opened'
import { Copyright } from './Copyright'
import { CookieLine } from './CookieLine'


const Footer = ({state, act, admin})=>{
  return(
    <footer>

      <div className="footerTop flex">
        <Contacts info={state.footer.info} />
        <Opened opened={state.footer.opened} />
      </div>

      <Copyright txt={state.footer.info.lines[0].name} act={act} admin={admin} />

      <CookieLine cookieline={state.footer.cookieline} act={act} />

    </footer>
  )
}

export default Footer