import React, { useState } from 'react'
import './Admin.scss'

import { adminActions } from './actions'

import Logo from './elements/Logo'
import Menu from './elements/Menu'


const Admin = ({state})=>{

  const [admin, setAdmin] = useState(state)

  const adm = (action)=> adminActions( action, admin, setAdmin )

  console.log('admin', admin)

  return(
    <div className="adminPannel">
    {
      admin.map( (object, index)=>{
        switch(object.tag){

          case "logo":
            return <Logo object={object} adm={adm} key={`Logo${index}`} />

          case "menu":
            return <Menu object={object} adm={adm} key={`MenuBtn${object.to + index}`} />
          
          default: return <div key={`adminPannelEmpty${index}`}></div>

        }
      })
    }
    </div>
  )
}

export default Admin