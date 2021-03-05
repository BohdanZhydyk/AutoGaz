import React from 'react'
import './AdminPannel.scss'

import { AdminModeIndicator } from './AdminModeIndicator'


export const AdminPannel = ({admin, act})=>{

  let changeInput = ( input, e )=>
    act({ addr:"admin", type:"ADMIN_CHANGE_INPUT", payload:{input:input, target:e.target.value} })

  let submitBtnClick = ()=>
    act({ addr:"admin", type:"ADMIN_SUBMIT_BTN", payload:false })

  return(
    <div className="adminPannel flex">

    { admin.adminMode && <AdminModeIndicator msg={admin.msg} act={act} /> }

    {
      admin.adminPannel &&

      <div className="forms flex column">

        <h2>Panel administratora</h2>

        <input type="text" placeholder="login" onChange={ (e)=> changeInput( "login", e ) } />

        <span className="err">{admin.err.login}</span>

        <input type="password" placeholder="hasło" onChange={ (e)=> changeInput( "pass", e ) } />

        <span className="err">{admin.err.pass}</span>

        <button className="button button-Y" onClick={ ()=> submitBtnClick() }>
          <span>{admin.msg.btns.yes}</span>
        </button>

        <span style={{fontSize:"80%"}}>
          W czasie tworzenia i testowania strony
          <span style={{color:"#1c1"}}> login:admin</span>,
          <span style={{color:"#1c1"}}> hasło:admin</span>
        </span>

      </div>
    }  
    </div>
  )
}