
export const footerActions = (type, payload, state, setState)=>{
  switch(type){

    case "COOKIES_ACCEPT":
      setState({
        ...state,
        footer: {
          ...state.footer,
          cookieline:{
            ...state.footer.cookieline,
            active:payload
          }
        }
      })
      break

    default: break;

  }
}