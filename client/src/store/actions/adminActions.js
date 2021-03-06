import { initialAdmin } from './../state/admin'
export const adminActions = (type, payload, admin, setAdmin)=>{
  switch(type){

    case "ADMIN_OPEN_PANNEL":
      setAdmin({ ...admin, adminPannel: payload })
      break

    case "ADMIN_CHANGE_INPUT":
      if(payload.input === "login"){ setAdmin({ ...admin, login:payload.target }) }
      if(payload.input === "pass"){ setAdmin({ ...admin, pass:payload.target }) }
      break

    case "ADMIN_SUBMIT_BTN":

      let login = admin.err.login
      let pass = admin.err.pass

      admin.login === "admin" ? login = true : login = "nieprawidlowy login"
      admin.pass === "admin" ? pass = true : pass = "nieprawidlowe hasło"

      if( login === true && pass === true ){
        setAdmin({
          ...admin,
          adminMode:true,
          adminPannel:false,
          err:{login, pass}
        })
      }
      else{ setAdmin({ ...admin, err:{login, pass} }) }

      break

    case "ADMIN_SAVE_CHANGES":
      setAdmin(initialAdmin)
      break

    default: break;
  }
}