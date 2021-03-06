import React from 'react'


export const TagH1 = ({ item, theme, index, act })=>{
  return(
    <h1 className={`tagH1 tagH1-${theme} flex`} key={`H1${index}`} >
      <span>{item.txt}</span>
    </h1>
  )
  // {
  //   tag:"h1",
  //   txt:string
  // }
}