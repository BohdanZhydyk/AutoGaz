import React from 'react'
import './Logo.scss'


const Logo = ({object, adm})=>{
  return(
    <div className="logoPannel flex">
      <span>{object.name}</span>
    </div>
  )
}

export default Logo