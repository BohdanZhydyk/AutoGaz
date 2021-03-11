import React from 'react'


export const Button = ({txt, act})=>{

  let check = ()=>
    act({ addr:"admin", type:"CHECK_FOR_ADMIN", payload:true })

  return(
    <button className="flex" onClick={ ()=> check() } >
      {txt}
    </button>
  )
}