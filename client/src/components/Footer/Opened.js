import React from 'react'


export const Opened = ({opened})=>{
  return(
    <div className="opened">

      <h3>{opened.txt}</h3>

      {
        opened.lines.map( (line, index)=>{
          return(
            <div className="flex start" key={`footerOpened${index}`}>

              <span className="days">{line.day}</span>
              
              <span className="hours">{line.hours}</span>

            </div>
          )
        })
      }
    </div>
  )
}