import React from 'react'


export const AdminForm = ({admin, act})=>{

  let enter = (e)=>{
    if(e.key === "Enter"){ act({ addr:"footer", type:"CHECK_FOR_ADMIN", payload:true }) }
  }
  
  return(
    <div className="adminForm flex column" onKeyUp={ (e)=> enter(e) } >

      <Header txt={admin.pannel.header} />

      <Input name={"login"} input={admin.pannel.login} errors={admin.messages} act={act} />

      <Input name={"pass"} input={admin.pannel.pass} errors={admin.messages} act={act} />

      <Button txt={admin.pannel.buttonTxt} act={act} />

      <div className="info flex column">
        <div>pod czas dzialania strony w trybie testowym:</div>
        <div>login:<span>admin</span></div>
        <div>hasło:<span>admin</span></div>
      </div>

    </div>
  )
}

const Header = ({txt})=> <h3>{txt}</h3>

const Input = ({name, input, errors, act})=>{

  let ChangeInput = (name, value)=>
    act({ addr:"footer", type:"CHANGE_INPUT", payload:{input:name, value:value} })

  return(
    <>

      <input type="text" placeholder={input.placeholder}
        value={input.value} onChange={ (e)=> ChangeInput(name, e.target.value) } />

      <span className="err">{ input.err && errors[input.err] }</span>

    </>
  )
}

const Button = ({txt, act})=>{

  let check = ()=>
    act({ addr:"footer", type:"CHECK_FOR_ADMIN", payload:true })

  return(
    <button className="flex" onClick={ ()=> check() } >
      {txt}
    </button>
  )
}