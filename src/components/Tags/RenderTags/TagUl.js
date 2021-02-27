import React from 'react'


export const TagUl = ({ obj:{item, index, theme}, act })=>{
  return(
    <div className={`tagUl`}>
      <p className="ul">{item.txt}</p>
      { item.li.map( (line, nr)=> <p className="li" key={index+nr+theme}>{`- ${line};`}</p> ) }
    </div>
  )
  // {
  //   tag:"ul",
  //   txt:string,
  //   li: [string, string, ...]
  // },
}