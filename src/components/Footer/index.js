import React from 'react'
import './Footer.scss'


const Footer = ({footer})=>{
  return(
    <footer className="flex between">

      <div className="information">
      {
        footer.info.map( (line, index)=>{
          return(
            line.href
            ?
            <a className="infoLine" href={line.href} target="_blank" rel="noreferrer">
              {line.name}
            </a>
            :
            <div className="infoLine">{line.name}</div>
          )
        })
      }
      </div>

      <div className="opened">
        <h3>{footer.opened.txt}</h3>
      {
        footer.opened.lines.map( (line, index)=>{
          return(
            <div className="flex between">
              <span>{line.day}</span>
              <span>{line.hours}</span>
            </div>
          )
        })
      }
      </div>

    </footer>
  )
}

export default Footer