import React from 'react'

import { SubMenuPannel } from './SubMenuPannel'


export const Cookie = ({ props:{ state, theme = "light", act, admin } })=>{
  return(
    <div className="cookie">
      <SubMenuPannel props={{ el:state.cookie, nr:state.cookie.inn, theme, act, admin }} />
    </div>
  )
}