import React from 'react'


export const TagImg = ({ props:{ item, index, theme, act, admin } })=>{
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