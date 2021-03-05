
export const addMenu = (id, object, setObject)=>{

  let newObject = []

  for(let i=0; i<object.length; i++){
    if(object[i].id === id){
      newObject.push(
        object[i],
        {
          id: new Date().getTime(),
          tag:"menu",
          to:"",
          txt:""
        },
        {id: new Date().getTime() + 1, tag:"tagBtns"}
      )
    }
    else{ newObject.push( object[i] ) }
  }

  setObject(newObject)

}