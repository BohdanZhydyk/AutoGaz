
export const adminActions = ( type, payload, state, setState )=>{

  switch(type){

    case "OPEN_ADMIN_PANNEL":
      setState(
        state.map( (el)=>{
          if( el.tag === "admin" ){
            return {
              ...el,
              pannel:{
                ...el.pannel,
                active: !el.pannel.active
              }
            }
          }else{ return el }
        })
      )
      break
    
    case "CHANGE_INPUT":

      let inputChange = (pannel)=>{
        if( payload.input === "login" ) return { ...pannel, login:{...pannel.login, value:payload.value} }
        if( payload.input === "pass" ) return { ...pannel, pass:{...pannel.pass, value:payload.value} }
      }

      setState(
        state.map( (el)=>{
          if( el.tag === "admin" ){
            return {
              ...el,
              pannel:inputChange(el.pannel)
            }
          }else{ return el }
        })
      )
      break

    case "CHECK_FOR_ADMIN":

      let checkInputs = (pannel)=>{

        let error = {login:false, pass:false}

        if(pannel.login.value !== "admin"){ error.login = 1 }
        if(pannel.pass.value !== "admin"){ error.pass = 2 }

        if(pannel.login.value === ""){ error.login = 3 }
        if(pannel.pass.value === ""){ error.pass = 3 }

        if(!error.login && !error.pass){
          return{
            ...pannel,
            adminMode: true,
            login:{ ...pannel.login, value:"", err:false },
            pass:{ ...pannel.pass, value:"", err:false }
          }
        }
        else{
          return{
            ...pannel,
            login:{ ...pannel.login, err:error.login },
            pass:{ ...pannel.pass, err:error.pass }
          }
        }

      }

      setState(
        state.map( (el)=>{
          if( el.tag === "admin" ){
            return {
              ...el,
              pannel:checkInputs(el.pannel)
            }
          }else{ return el }
        })
      )
      break

    case "EXIT_ADMIN_MODE":
      setState(
        state.map( (el)=>{
          if( el.tag === "admin" ){
            return {
              ...el,
              pannel: {
                ...el.pannel,
                adminMode: payload,
                active: payload
              }
            }
          }else{ return el }
        })
      )
      break

    default: break
  }
}