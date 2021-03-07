import React from 'react'
import { AdminForm } from './AdminForm'


export const Copyright = ({admin, txt, act})=>{

  let OpenAdminPannel = ()=>
    act({ addr:"footer", type:"OPEN_ADMIN_PANNEL", payload:!admin.active })

  return(
    <div className="copyright flex" >
    {
      admin.pannel.adminMode
      ? <span>{admin.messages[0]}</span>
      : admin.active
        ?
        <AdminForm admin={admin} act={act} />
        :
        <span onClick={ ()=> OpenAdminPannel() } >{`© 2020-${ new Date().getFullYear() } ${txt}`}</span>
    }
    </div>
  )
}