import React from 'react'


export const InputTextarea = ({ props:{ target, paragraphFn } })=>{

  let CHANGE_TEXTAREA = (e)=> paragraphFn({ type:"CHANGE_TEXTAREA", payload:e.target.value })

  return(
    <textarea rows="5" onChange={ (e)=> CHANGE_TEXTAREA(e) } >
      { target.txt }
    </textarea>
  )
}