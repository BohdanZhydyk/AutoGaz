import React from 'react'
import './TagParser.scss'


const TagParser = ({object, adm})=>{
  console.log('w', object)
  return(
    <>
    {
      object.map( (el, nr)=>{
        switch(el.tag){

          case "p":
            return <div>paragraph</div>
      
          default: return <></>
      
        }
      })
    }
    </>
  )




}

export default TagParser