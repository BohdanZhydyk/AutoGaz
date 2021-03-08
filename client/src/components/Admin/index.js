import React, { useState } from 'react'
import './Admin.scss'

import { adminActions } from './actions'


const Admin = ({state})=>{

  const [admin, setAdmin] = useState(state)

  const adm = (action)=> adminActions( action, admin, setAdmin )

  console.log('admin', admin)

  return(
    <div className="adminPannel">
    {
      admin.map( (element, index)=>{
        switch(element.tag){

          case "logo":
            return <Logo el={element} adm={adm} key={`Logo${index}`} />

          case "menu":
            return <ElementMenu element={element} adm={adm} key={`MenuBtn${element.to + index}`} />
          
          default: return <></>

        }
      })
    }
    </div>
  )
}

export default Admin

const Logo = ({el, adm})=>{
  return(
    <div className="logo flex">
      <span>{el.name}</span>
    </div>
  )
}

const ElementMenu = ({element, adm})=>{
  return(
    <div className="elementMenu">

      <div className="menuBtn flex" onClick={ ()=> adm({type:"MENU_BTN_CLICK", payload:element.to}) } >
        <span>{element.txt}</span>
      </div>

      { element.active && <ElementMenuHeader item={element} adm={adm} /> }

    </div>
  )
}

const ElementMenuHeader = ({item, adm})=>{
  return(
    <div className="elementMenuHeader">
      <div>header</div>
      {
        item.header
        ? <span>header true</span>
        : <span>header false</span>
      }
      {
        item.subMenu &&
        item.subMenu.map( (el, nr)=>
          <ElementSubMenu el={el} adm={adm} key={`MenuBtn${el.to + nr}`} />
        )
      }
    </div>
  )
}



const ElementSubMenu = ({el, adm})=>{
  return(
    <div className="subMenuBtn flex" onClick={ ()=> adm({type:"SUB_MENU_BTN_CLICK", payload:el.to}) } >
      <span>{el.txt}</span>
    </div>
  )
}
