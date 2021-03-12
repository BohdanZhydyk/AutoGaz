import React from 'react'


export const EditDeletePannel = ({item, theme, act})=>{

  let edit = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn:item.inn} })
  let save = ()=> act({ addr:"admin", type:"SAVE_TAG", payload:{...item} })
  let del = ()=> act({ addr:"admin", type:"DELETE_TAG", payload:{inn:item.inn} })

  return(
    <span className="Edit-Delete flex column">
      <img onClick={ ()=> save() } src={`https://autogaz.bzdrive.com/images/btns/icoSave.png`} alt="save" />
      <img onClick={ ()=> del() } src={`https://autogaz.bzdrive.com/images/btns/icoDelete.png`} alt="delete" />
    </span>
  )
}