import React from 'react'


export const TagImg = ({ obj:{item, index, theme}, act })=>{
  return(
    <div className={`tagImg flex`}>
      <img style={{width:item.width+"vw"}} src={item.src} alt="tagImg" />
    </div>
  )
  // {
  //   tag:"img",
  //   width:int,
  //   src:string
  // }
}