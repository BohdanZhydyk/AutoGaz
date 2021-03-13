import React from 'react'

import { SubMenuPannel } from './SubMenuPannel'


export const SubMenuPannels = ({ props:{ submenu, act, admin } })=>{

  let theme = "dark"

  return(
    <>
    {
      submenu &&
      submenu.map( (el, nr)=>{
        switch(el.tag){
          case "theme":
            (theme === "light" ? theme = "dark" : theme = "light")
            return <SubMenuPannel props={{ el, nr, theme, act, admin }} key={`suMenuPannel${el.inn+nr}`} />
          default: return
        }
      })
    }
    </>
  )
}