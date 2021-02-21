import React from 'react'


export const TagUl = ({value})=>{
  return(
    <div className="tagUl">
      <div className="section">{value.txt}</div>
      <div className="subSection">
      {
        value.li.map( (line, index)=>{
          return(
          <div className="line flex start" key={`Li${index}`}>
            <span className="dot">{` - `}</span>
            <span className="li flex start">{line}</span>
          </div>
          )
        })
      }
      </div>
    </div>
  )
}