import React from 'react'


export const InputA = ({ props:{ target, paragraphFn } })=>{

  let CHANGE_A = (e)=> paragraphFn({ type:"CHANGE_A", payload:e.target.value })

  return(
    <input type="text" value={target.a} placeholder={`text linka...`} onChange={ (e)=> CHANGE_A(e) } />
  )
}