import React from 'react'
import './Admin.scss'

import { Header } from './Header'
import { Input } from './Input'
import { Button } from './Button'


const Admin = ({state, act})=>{

  let enter = (e)=>{
    if(e.key === "Enter"){ act({ addr:"admin", type:"CHECK_FOR_ADMIN", payload:true }) }
  }

  return(
    <div className="adminPannel flex">
    {
      state.admin.pannel.active &&
      <section>
      {
        !state.admin.adminMode &&
        <div className="form flex column" onKeyUp={ (e)=> enter(e) } >

          <Header txt={state.admin.pannel.header} />

          <Input name={"login"} input={state.admin.pannel.login} errors={state.admin.messages} act={act} />

          <Input name={"pass"} input={state.admin.pannel.pass} errors={state.admin.messages} act={act} />

          <Button txt={state.admin.pannel.buttonTxt} act={act} />

          <div className="info flex column">
          <div>pod czas dzialania strony w trybie testowym:</div>
            <div>login:<span>admin</span></div>
            <div>hasło:<span>admin</span></div>
          </div>

        </div>
      }
      </section>
      
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