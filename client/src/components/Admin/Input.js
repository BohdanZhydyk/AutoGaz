import React from 'react'


export const Input = ({name, input, errors, act})=>{

  let ChangeInput = (name, value)=>
    act({ addr:"admin", type:"CHANGE_INPUT", payload:{input:name, value:value} })

  return(
    <>

      <input type="text" placeholder={input.placeholder}
        value={input.value} onChange={ (e)=> ChangeInput(name, e.target.value) } />

      <span className="err">{ input.err && errors[input.err] }</span>

    </>
  )
}