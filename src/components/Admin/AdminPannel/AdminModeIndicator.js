import React from 'react'


export const AdminModeIndicator = ({msg, act})=>{

  let submitBtnClick = ()=>
    act({ addr:"admin", type:"ADMIN_SAVE_CHANGES", payload:false })

  return(
    <div className="adminModeIndicator flex column">

      { msg.lines.map( (txt, index)=> <div className="txt" key={`adminMSG${index}`}>{txt}</div> ) }

      <button className="button button-N" onClick={ ()=> submitBtnClick() }>
        <span>{msg.btns.no}</span>
      </button>

    </div>
  )
}