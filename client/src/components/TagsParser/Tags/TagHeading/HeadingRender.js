import React from 'react'


export const HeadingRender = ({ props:{ target, admin, act } })=>{

  let EDIT_TAG = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn:target.inn} })

  return(
    <div className="content flex" onClick={ ()=> admin && EDIT_TAG() } >
      <span>{target.txt}</span>
    </div>
  )
}