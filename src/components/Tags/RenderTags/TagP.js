import React from 'react'


export const TagP = ({ obj:{item, index, theme} })=>{
  return(
    <p className={`tagP tagP-${theme}`}>
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