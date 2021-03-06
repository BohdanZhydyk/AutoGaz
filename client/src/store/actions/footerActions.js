
export const footerActions = (type, payload, footer, setFooter)=>{
  alert(type)
  switch(type){
    case "COOKIES_ACCEPT":
      setFooter({
        ...footer,
        cookieline: {
          ...footer.cookieline,
          active: payload
        }
      })
      break

    default: break;
  }
}