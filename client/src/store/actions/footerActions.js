
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

    default: break;

  }
}