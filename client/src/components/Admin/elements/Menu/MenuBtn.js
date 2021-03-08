import React from 'react'


export const MenuBtn = ({object, adm})=>{
  return(
    <div
      className={object.active ? `menuBtn menuBtn-active flex` : `menuBtn flex`}
      onClick={ ()=> adm({type:"MENU_BTN_CLICK", payload:object.to}) }
    >

      <span>{object.txt}</span>

    </div>
  )
}