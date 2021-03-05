import React, { useState } from 'react'
import './Test.scss'


const Test = ({object, chg})=>{

  const [test, setTest] = useState({
    header:false,
    main:false,
    footer:false
  })

  if(!test.header){
    for(let i=0; i<object.length; i++){
      if(object[i].tag === "logo"){
        setTest({
          ...test,
          header:{ logo:object[i] }
        })
      }
    }
  }

  console.log(test)

  return(
    <div className="testPannel flex column">
      <Header header={test.header} chg={chg} />
    </div>
  )
}

export default Test

const Header = ({header, chg})=>{
  return(
    <div className="header flex">
      <div className="logo"></div>
    </div>
  )
}