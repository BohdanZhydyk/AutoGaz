import React from 'react'


export const TagP = ({el, nr, adm})=>{
  return(
    <p className="adminTagP" key={`paragraph${nr}`}>
      {el.txt}
      { el.a && <a href={el.href}>{el.a}</a> }
    </p>
  )
  // {
  //   tag:"p",
  //   txt:string,
  //   a:string,
  //   href:string
  // }
}