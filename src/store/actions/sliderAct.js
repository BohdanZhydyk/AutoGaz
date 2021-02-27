
export const sliderAct = ( {tag, type, data}, main, setMain )=>{
  switch(type){
    case "SLIDER_BTN_CLICK": SLIDER_BTN_CLICK(data, main, setMain); break;
    default: break
  }
}

function SLIDER_BTN_CLICK(data, main, setMain){

  let id = data.id

  if(data.dir === "L")   id -= 1
  if(data.dir === "R")  id += 1

  setMain({
    ...main,
    services: main.services.map( (servicesEl)=>{

      switch(servicesEl.name){
        case "slider":
          return({
            ...servicesEl,
            object: servicesEl.object.map( (objectEl)=>{

              let len = objectEl.images.length
              
              switch(objectEl.tag){
                case "slider":
                  return({
                    ...objectEl,
                    images: objectEl.images.map( (image, index)=>{

                      if(id === -1)   id = len - 1
                      if(id === len)  id = 0
                      
                      if(index === id)  return({ ...image, active: true })
                      else              return({ ...image, active: false })

                    })
                  })
                default: return(objectEl)
              }

            })
          })
        default: return(servicesEl)
      }

    })
  })
}