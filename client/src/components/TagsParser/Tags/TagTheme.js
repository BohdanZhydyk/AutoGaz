import React, { useState } from 'react'


export const TagTheme = ({ item, theme, index, act, admin })=>{

  const [target, setTarget] = useState(item)

  let edit = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn:target.inn} })

  return(
    <h2 className={`tagTheme`} >
    {

      !target.editing

      ?

      <div onClick={ ()=> admin && edit() } >
        <div className={`line line-${theme}`}></div>
        <div className={`text text-${theme} flex`}>
          <span className={`span span-${theme} flex`}>{item.txt}</span>
        </div>
      </div>

      :

      <>editing</>

    }
    </h2>
  )
  // {
  //   tag:"theme",
  //   txt:string
  // }
}