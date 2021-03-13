import React from 'react'


export const EditDeletePannel = ({ props:{ target, theme, act } })=>{

  let save = ()=> act({ addr:"admin", type:"SAVE_TAG", payload:{...target} })
  let del = ()=> act({ addr:"admin", type:"DELETE_TAG", payload:{inn:target.inn} })

  return(
    <span className="Edit-Delete flex wrap">
      <img onClick={ ()=> save() } src={`https://autogaz.bzdrive.com/images/btns/icoSave.png`} alt="save" />
      <img onClick={ ()=> del() } src={`https://autogaz.bzdrive.com/images/btns/icoDelete.png`} alt="delete" />
    </span>
  )
}