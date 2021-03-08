import React from 'react'


export const SubMenuBtn = ({submenu, adm})=>{
  return(
    <div
      className="subMenuBtn flex"
      onClick={ ()=> adm({type:"SUB_MENU_BTN_CLICK", payload:submenu.to}) }
    >

      <span>{submenu.txt}</span>
      
    </div>
  )
}