import React, { useState } from 'react'
import './Admin.scss'

import { addMenu } from './actions/addMenu'

import Test from './Test'
import Edit from './Edit'


const Admin = ({initHeader, initMain, initFooter, act})=>{

  // const [header, useHeader] = useState(initHeader)
  // const [main, useMain] = useState(initMain)
  // const [footer, useFooter] = useState(initFooter)

  const [mode, setMode] = useState({ testMode: false })

  const [object, setObject] = useState([
    {
      id: new Date().getTime(),
      tag:"logo",
      name:"",
      image:""
    },
    {id: new Date().getTime() + 1, tag:"tagBtns"}
  ])

  console.log('obj', object)

  const chg = ({add, id})=>{
    switch(add){
      case "menu": addMenu(id, object, setObject); break;
      default: break
    }
  }


  return(
    <div className="adminPannel flex column">

      <div className="testBtns flex">

        <button className="testBtn flex"
          onClick={ ()=> setMode({ testMode: !mode.testMode }) } >test</button>

        <button className="saveBtn flex" >save</button>

      </div>

      {
        mode.testMode
        ?
        <Test object={object} chg={chg} />
        :
        <Edit object={object} chg={chg} />
      }

    </div>
  )
}

export default Admin
