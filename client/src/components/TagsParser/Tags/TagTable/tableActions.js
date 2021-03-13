
export const tableActions = (type, payload, target, setTarget)=>{

  switch(type){
    case "COLUMN_WIDTH_EDIT":
      setTarget({
        ...target,
        width: target.width.map( (oldWidth, index)=> payload.nr === index ? payload.value : oldWidth )
      })
      break
    case "COLUMN_ALIGN_EDIT":
      setTarget({
        ...target,
        align: target.align.map( (oldAlign, index)=> payload.nr === index ? payload.value : oldAlign )
      })
      break
    case "CHANGE_iTEM_VALUE":
      setTarget({
        ...target,
        content: target.content.map( (line, nr)=> nr === payload.tableLine
          ? line.map( (item, index)=> index === payload.tableColumn ? payload.value : item )
          : line
        )
      })
      break
    default: break
  }

}