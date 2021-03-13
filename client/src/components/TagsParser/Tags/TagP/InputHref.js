import React from 'react'


export const InputHref = ({ props:{ target, paragraphFn } })=>{

  let CHANGE_HREF = (e)=> paragraphFn({ type:"CHANGE_HREF", payload:e.target.value })

  return(
    <input type="text" value={target.href} placeholder={`adres linka...`} onChange={ (e)=> CHANGE_HREF(e) } />
  )
}