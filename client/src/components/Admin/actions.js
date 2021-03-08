
export const adminActions = ( action, admin, setAdmin )=>{

  switch(action.type){

    case "MENU_BTN_CLICK":
      setAdmin(
        admin.map( (element)=>{
          if(element.tag === "menu"){
            if(element.to === action.payload){ return {...element, active:true} }
            else{ return {...element, active:false} }
          }
          else{ return element }
        })
      )
      break

    case "SUB_MENU_BTN_CLICK":
      alert(action.payload)
      break

    default: break
  }

  // let newAdmin = admin.map( (menu, index)=>{
  //   if(menu.tag === "menu"){
  //     return{
  //       ...menu,
  //       active: true
  //     }
  //     if(menu.subMenu){
  //       menu.subMenu.map( (submenu, nr)=>{
  //         if(submenu.to === action){
  //           console.log(submenu.to)
  //         }
  //       })
  //     }
  //   }
  // })
}