import React, { useState } from 'react'
import './Admin.scss'

import { Header } from './Header'
import { Input } from './Input'
import { Button } from './Button'


const Admin = ({state, act})=>{

  let adminObj
  state.map( (el)=>{ if(el.tag === "admin") adminObj = el })

  let enter = (e)=>{
    if(e.key === "Enter"){ act({ addr:"admin", type:"CHECK_FOR_ADMIN", payload:true }) }
  }

  let exit = ()=> act({ addr:"admin", type:"EXIT_ADMIN_MODE", payload:false })

  // const [admin, setAdmin] = useState(state)

  // const adm = (action)=> adminActions( action, admin, setAdmin )

  // console.log('admin', admin)

  return(
    <div className="adminPannel flex">
    {
      adminObj.pannel.active &&
      <>
      {
        adminObj.pannel.adminMode
        ?
        <button className="exit" onClick={ ()=> exit() } >Exit AdminMode</button>
        :
        <div className="form flex column" onKeyUp={ (e)=> enter(e) } >

          <Header txt={adminObj.pannel.header} />

          <Input name={"login"} input={adminObj.pannel.login} errors={adminObj.messages} act={act} />

          <Input name={"pass"} input={adminObj.pannel.pass} errors={adminObj.messages} act={act} />

          <Button txt={adminObj.pannel.buttonTxt} act={act} />

          <div className="info flex column">
          <div>pod czas dzialania strony w trybie testowym:</div>
            <div>login:<span>admin</span></div>
            <div>hasło:<span>admin</span></div>
          </div>

        </div>
      }
      </>
      
    }
    </div>
  )
}

export default Admin







    // import { AdminForm } from './AdminForm'

    // <span onClick={ ()=> OpenAdminPannel() } >{`© 2020-${ new Date().getFullYear() } ${txt}`}</span>
      // <div className="copyright flex" >
      // {
      //   admin
      //   ? <span>{admin.messages[0]}</span>
      //   : admin
      //     ?
      //     <AdminForm admin={admin} act={act} />
      //     :
      //     <span onClick={ ()=> OpenAdminPannel() } >{`© 2020-${ new Date().getFullYear() } ${txt}`}</span>
      // }
      // </div>

      

// {
//   admin.map( (object, index)=>{
//     switch(object.tag){

//       case "logo":
//         return <Logo object={object} adm={adm} key={`Logo${index}`} />

//       case "menu":
//         return <Menu object={object} adm={adm} key={`MenuBtn${object.to + index}`} />
      
//       default: return <div key={`adminPannelEmpty${index}`}></div>

//     }
//   })
// }