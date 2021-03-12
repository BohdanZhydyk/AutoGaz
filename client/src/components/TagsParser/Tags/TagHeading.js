import React, { useState } from 'react'

import { EditDeletePannel } from './../EditDeletePannel'
import { AddTagPannel } from './../AddTagPannel'


export const TagHeading = ({ item, theme, index, act, admin })=>{

  const [target, setTarget] = useState(item)

  let edit = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn:target.inn} })

  return(
    <h3 className={`tagHeading tagHeading-${theme} ${admin && 'tagHeading-admin'} flex`} >
    {

      !target.editing

      ?

      <div className="content flex" onClick={ ()=> admin && edit() } >
        <span>{target.txt}</span>
      </div>

      :
      <div className="content flex column" >
        <AddTagPannel theme={theme} />

        <div className="flex">

          <input type="text" value={target.txt} placeholder={`text hedera...`}
              onChange={ (e)=> setTarget({...target, txt:e.target.value}) } />

          <EditDeletePannel item={target} theme={theme} act={act} />
          
        </div>
        
        <AddTagPannel theme={theme} />
      </div>

    }
    </h3>
  )
  // {
  //   tag:"h1",
  //   txt:string
  // }
}