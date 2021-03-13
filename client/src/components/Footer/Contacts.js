import React from 'react'


export const Contacts = ({info})=>{
  return(
    <div className="contacts">

      <h3>{info.txt}</h3>

      {
        info.lines.map( (line, index)=>{
          return(
            line.href
            ? <TypeA line={line} key={`footerContacts${index}`} />
            : <TypeB line={line} key={`footerContacts${index}`} />
          )
        })
      }
      
    </div>
  )
}

const TypeA = ({ line })=>
  <a className="contactLine" href={line.href} target="_blank" rel="noreferrer"> {line.name}</a>
  
const TypeB = ({ line })=>
  <div className="contactLine">{line.name}</div> 