import React from 'react'

import { SubMenuPannel } from './SubMenuPannel'


export const SubMenuPannels = ({submenu, act, admin})=>{

  let theme = "dark"

  return(
    <>
    {
      submenu &&
      submenu.map( (el, nr)=>{
        switch(el.tag){
          case "theme":
            (theme === "light" ? theme = "dark" : theme = "light")
            return <SubMenuPannel el={el} nr={nr} theme={theme} act={act} admin={admin} />
          default: return
        }
      })
    }
    </>
  )
}