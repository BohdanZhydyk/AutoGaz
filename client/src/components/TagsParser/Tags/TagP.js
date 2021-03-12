import React, { useState } from 'react'

import { EditDeletePannel } from './../EditDeletePannel'
import { AddTagPannel } from './../AddTagPannel'


export const TagP = ({ item, theme, index, act, admin })=>{

  const [target, setTarget] = useState(item)

  let edit = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn:target.inn} })

  return(
    <div className={`tagP tagP-${theme} ${admin && 'tagP-admin'}`} >
    {

      !target.editing

      ?

      <p onClick={ ()=> admin && edit() } >
        { target.txt }
        { target.a && <a href={target.href}>{` ${target.a}`}</a> }
      </p>

      :

      <div className="flex column">
        <AddTagPannel theme={theme} />

        <div className="flex">

          <textarea rows="5"
            onChange={ (e)=> setTarget({...target, txt:e.target.value}) }
          >
            { target.txt }
          </textarea>

          <EditDeletePannel item={target} theme={theme} act={act} />

        </div>

        <div className="flex">

          <input type="text" value={target.a} placeholder={`text linka...`}
            onChange={ (e)=> setTarget({...target, a:e.target.value}) } />

          <input type="text" value={target.href} placeholder={`adres linka...`}
            onChange={ (e)=> setTarget({...target, href:e.target.value}) } />
        </div>
        
        <AddTagPannel theme={theme} />
      </div>
      
    }
    </div>
  )
  // {
  //   tag:"p",
  //   txt:string,
  //   a:string,
  //   href:string
  // }
}