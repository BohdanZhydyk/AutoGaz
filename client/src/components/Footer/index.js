import React from 'react'
import './Footer.scss'

import { Contacts } from './Contacts'
import { Opened } from './Opened'
import { Copyright } from './Copyright'
import { CookieLine } from './CookieLine'


const Footer = ({state, act, admin})=>{
  return(
    <>
    {
      state.map( (el, index)=>{
        if( el.tag === "footer" ){
          return(
            <footer key={`Footer${index}`}>

              <div className="footerTop flex">
                <Contacts info={el.info} />
                <Opened opened={el.opened} />
              </div>

              <Copyright txt={el.info.lines[0].name} act={act} admin={admin} />

              <CookieLine cookieline={el.cookieline} act={act} />

              </footer>
          )
        }
        else{ return }
      })
    }
    </>
  )
}

export default Footer