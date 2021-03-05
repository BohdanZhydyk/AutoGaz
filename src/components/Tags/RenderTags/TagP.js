import React from 'react'


export const TagP = ({ item, theme, index, act })=>{
  return(
    <p className={`tagP tagP-${theme}`} key={`Paragraph${index}`} >
      {item.txt}
      { item.a && <a href={item.href}>{` ${item.a}`}</a> }
    </p>
  )
  // {
  //   tag:"p",
  //   txt:string,
  //   a:string,
  //   href:string
  // }
}