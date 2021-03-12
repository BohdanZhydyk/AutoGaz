import React from 'react'


export const Input = ({name, input, errors, act})=>{

  let ChangeInput = (name, value)=>
    act({ addr:"admin", type:"CHANGE_INPUT", payload:{input:name, value:value} })

  return(
    <section className="flex column">

      <fieldset className="flex">

        <legend>{input.legend}</legend>
        
        <input type={input.type} placeholder={input.placeholder}
        value={input.value} onChange={ (e)=> ChangeInput(name, e.target.value) } />

      </fieldset>
      
      <span className="err">{ input.err && errors[input.err] }</span>

    </section>
  )
}