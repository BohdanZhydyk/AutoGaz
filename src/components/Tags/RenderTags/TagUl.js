import React from 'react'


export const TagUl = ({ item, theme, index, act })=>{
  return(
    <div className={`tagUl`} key={`Ul${index}`}>
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