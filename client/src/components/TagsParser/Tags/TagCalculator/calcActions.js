
export const calcActions = (type, payload, target, setTarget)=>{

  switch(type){
    case "CHANGE_VALUE":
      setTarget({
        ...target,
        content: {
          ...target.content,
          ranges: target.content.ranges.map((item) =>
            item.name === payload.name ? { ...item, value: (payload.value / item.multiplier) } : { ...item }
          )
        }
      })
      break
    case "CHANGE_FUEL":
      setTarget({
        ...target,
        content: {
          ...target.content,
          sets: target.content.sets.map((item) =>
            item.nr === payload.nr ? { ...item, active: true } : { ...item, active: false }
          )
        }
      })
      break
    default: break
  }

}