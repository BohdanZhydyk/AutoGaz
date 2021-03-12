import { editState } from './../functions/editState'


export const adminActions = ( type, payload, state, setState )=>{

  switch(type){

    case "OPEN_ADMIN_PANNEL":
      setState({
        ...state,
        admin: {
          ...state.admin,
          pannel: {
            ...state.admin.pannel,
            active: !state.admin.pannel.active
          }
        }
      })
      break
    
    case "CHANGE_INPUT":

      if( payload.input === "login" ){
        setState({
          ...state,
          admin: {
            ...state.admin,
            pannel: {
              ...state.admin.pannel,
              login: {
                ...state.admin.pannel.login,
                value:payload.value
              }
            }
          }
        })
      }
      if( payload.input === "pass" ){
        setState({
          ...state,
          admin: {
            ...state.admin,
            pannel: {
              ...state.admin.pannel,
              pass: {
                ...state.admin.pannel.pass,
                value:payload.value
              }
            }
          }
        })
      }      
      break

    case "CHECK_FOR_ADMIN":

      let error = {login:false, pass:false}

      if(state.admin.pannel.login.value !== "admin"){ error.login = 1 }
      if(state.admin.pannel.pass.value !== "admin"){ error.pass = 2 }

      if(state.admin.pannel.login.value === ""){ error.login = 3 }
      if(state.admin.pannel.pass.value === ""){ error.pass = 3 }

      if(!error.login && !error.pass){
        setState({
          ...state,
          admin: {
            ...state.admin,
            adminMode: true,
            pannel: {
              ...state.admin.pannel,
              login: {
                ...state.admin.pannel.login,
                value:"", err:false
              },
              pass: {
                ...state.admin.pannel.pass,
                value:"", err:false
              }
            }
          }
        })
      }
      else{
        setState({
          ...state,
          admin: {
            ...state.admin,
            adminMode: false,
            pannel: {
              ...state.admin.pannel,
              login: {
                ...state.admin.pannel.login,
                err:error.login
              },
              pass: {
                ...state.admin.pannel.pass,
                err:error.pass
              }
            }
          }
        })
      }
      break

    case "EXIT_ADMIN_MODE":
      editState({
        ...state,
        admin: {
          ...state.admin,
          adminMode:false,
          pannel: {
            ...state.admin.pannel,
            active:false
          }
        },
        content: state.content.map( (element)=>{
          return{
            ...element,
            editing:false,
            header: element.header.map( (el)=>{
              return{
                ...el,
                editing:false
              }
            }),
            subMenu: element.subMenu.map( (el)=>{
              return{
                ...el,
                editing:false,
                content: el.content.map( (item)=>{
                  return{
                    ...item,
                    editing:false
                  }
                })
              }
            })
          }
        }),
        footer: {
          ...state.footer,
          cookieline: {
            ...state.footer.cookieline,
            active:true
          }
        }
      }, (data)=> setState(data) )
      break

    case "EDIT_TAG":
      setState({
        ...state,
        content: state.content.map( (element)=>{
          if(element.inn === payload.inn){
            return{
              ...element,
              editing:true,
              header: element.header.map( (el)=>{ return{...el, editing:false} }),
              subMenu: element.subMenu.map( (el)=>{
                return{
                  ...el,
                  editing:false,
                  content:el.content.map( (item)=>{ return{...item, editing:false} })
                }
              })
            }
          }
          else{
            return{
              ...element,
              editing:false,
              header: element.header.map( (el)=>{
                if(el.inn === payload.inn){ return{...el, editing:true} }
                else{ return{...el, editing:false} }
              }),
              subMenu: element.subMenu.map( (el)=>{
                if(el.inn === payload.inn){ return{...el, editing:true} }
                else{
                  return{
                    ...el,
                    editing:false,
                    content:el.content.map( (item)=>{
                      if(item.inn === payload.inn){ return{...item, editing:true} }
                      else{ return{...item, editing:false} }
                    })
                  }
                }
              })
            }
          }
        })
      })
      break
    
    case "SAVE_TAG":
      setState({
        ...state,
        content: state.content.map( (element)=>{
          if(element.inn === payload.inn){ return{...payload, editing:false, inn:new Date().getTime()} }
          else{
            return{
              ...element,
              editing:false,
              header: element.header.map( (el)=>{
                if(el.inn === payload.inn){ return{...payload, editing:false, inn:new Date().getTime()} }
                else{ return{...el, editing:false} }
              }),
              subMenu: element.subMenu.map( (el)=>{
                if(el.inn === payload.inn){ return{...payload, editing:false, inn:new Date().getTime()} }
                else{
                  return{
                    ...el,
                    editing:false,
                    content:el.content.map( (item)=>{
                      if(item.inn === payload.inn){ return{...payload, editing:false, inn:new Date().getTime()} }
                      else{ return{...item, editing:false} }
                    })
                  }
                }
              })
            }
          }
        })
      })
      break

    case "DELETE_TAG":
      alert(`DELETE ${payload.inn}`)
      break

    default: break
  }
}