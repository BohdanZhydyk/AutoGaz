import React from 'react'


export const TagH1 = ({el, nr, adm})=>{
  return(
    <h1 className={`adminTagH1 flex`}>
      <span>{el.txt}</span>
    </h1>
  )
  // {
  //   tag:"h1",
  //   txt:string
  // }
}