import React from 'react'


export const TagImg = ({ item, theme, index, act })=>{
  return(
    <div className={`tagImg flex`} key={`Image${index}`} >
      <img style={{width:item.width+"vw"}} src={item.src} alt="tagImg" />
    </div>
  )
  // {
  //   tag:"img",
  //   width:int,
  //   src:string
  // }
}