import React from 'react'


export const TagHeading = ({ item, theme, index, act })=>{
  return(
    <h3 className={`tagHeading tagHeading-${theme} flex`} key={`Heading${index}`} >
      <span>{item.txt}</span>
    </h3>
  )
  // {
  //   tag:"h1",
  //   txt:string
  // }
}