import React from 'react'


export const Contacts = ({info})=>{
  return(
    <div className="contacts">

      <h3>{info.txt}</h3>

      {
        info.lines.map( (line, index)=>{
          return(
            line.href
            ?
            <a className="contactLine" href={line.href} target="_blank" rel="noreferrer" key={`footerContacts${index}`}>
              {line.name}
            </a>
            :
            <div className="contactLine" key={`footerContacts${index}`}>{line.name}</div>
          )
        })
      }
      
    </div>
  )
}