
export const footerActions = (type, payload, state, setState)=>{
  switch(type){

    case "COOKIES_ACCEPT":
      setState(
        state.map( (el)=>{
          if( el.tag === "footer" ){
            return {
              ...el,
              cookieline:{
                ...el.cookieline,
                active:payload
              }
            }
          }else{ return el }
        })
      )
      break

    case "OPEN_ADMIN_PANNEL":
      setState(
        state.map( (el)=>{
          if( el.tag === "footer" ){
            return {
              ...el,
              admin:{
                ...el.admin,
                active:payload
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
          if( el.tag === "footer" ){
            return {
              ...el,
              admin:{
                ...el.admin,
                pannel:inputChange(el.admin.pannel)
              }
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
          if( el.tag === "footer" ){
            return {
              ...el,
              admin:{
                ...el.admin,
                pannel:checkInputs(el.admin.pannel)
              }
            }
          }else{ return el }
        })
      )
      break

    default: break;

  }
}