import React from 'react'
import './TagParser.scss'

import { TagH1 } from './TagH1'
import { TagP } from './TagP'


const TagParser = ({object, adm})=>{
  return(
    <>
    {
      object.map( (el, nr)=>{
        switch(el.tag){

          case "h1":
            return(
              <>
                <TagH1 el={el} nr={nr} adm={adm} key={el.tag + nr} />
                <div className="addTag flex">add new tag pannel</div>
              </>
            )

          case "p":
            return(
              <>
                <TagP el={el} nr={nr} adm={adm} key={el.tag + nr} />
                <div className="addTag flex">add new tag pannel</div>
              </>
            )
      
          default: return
      
        }
      })
    }
    </>
  )
}

export default TagParser