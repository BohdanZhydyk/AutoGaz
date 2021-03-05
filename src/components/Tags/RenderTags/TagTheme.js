import React from 'react'


export const TagTheme = ({ item, theme, index, act })=>{
  return(
    <h2 className={`tagTheme`} key={`Theme${index}`} >
      <div className={`line line-${theme}`}></div>
      <div className={`text text-${theme} flex`}>
        <span className={`span span-${theme} flex`}>{item.txt}</span>
      </div>
    </h2>
  )
  // {
  //   tag:"theme",
  //   txt:string
  // }
}