import React from 'react'
import './Footer.scss'

import { Contacts } from './Contacts'
import { Opened } from './Opened'
import { Copyright } from './Copyright'
import { CookieLine } from './CookieLine'


const Footer = ({footer, act})=>{
  return(
    <footer>

      <div className="footerTop flex">
        <Contacts info={footer.info} />
        <Opened opened={footer.opened} />
      </div>

      <Copyright txt={footer.info.lines[0].name} />

      <CookieLine cookieline={footer.cookieline} act={act} />

    </footer>
  )
}

export default Footer