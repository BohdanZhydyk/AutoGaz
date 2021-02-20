import React from 'react'
import './Hello.scss'

import { Paragraph } from './Paragraph'
import { Image } from './Image'


const Hello = ({hello})=>{
  return(
    <div className="hello">
      <h1 className="header flex">{hello.header}</h1>
      {
        hello.content.map( (item, index)=>{
          switch(item.tag){
            case "p":
              return <Paragraph value={item.value} key={`helloparagraph${index}`}/>
            case "img":
              return <Image value={item.value} key={`helloimage${index}`}/>
            default: return <></>
          }
        })
      }
    </div>
  )
}

export default Hello