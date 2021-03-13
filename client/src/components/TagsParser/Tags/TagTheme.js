import React, { useState } from 'react'

import { EditDeletePannel } from './../EditDeletePannel'
import { AddTagPannel } from './../AddTagPannel'


export const TagTheme = ({ item, theme, index, act, admin })=>{

  const [target, setTarget] = useState(item)

  let edit = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn:target.inn} })

  return(
    <section className={`tagTheme`} >
    {

      !target.editing

      ?

      <div className="content" onClick={ ()=> admin && edit() } >
        <div className={`line line-${theme}`}></div>
        <div className={`text text-${theme} ${admin && 'text-admin'} flex`}>
          <span className={`span span-${theme} flex`}>{target.txt}</span>
        </div>
      </div>

      :

      <div className="content" >

        <AddTagPannel theme={theme} />

        <section>
          <div className={`line line-${theme}`}></div>
          <div className={`text text-${theme} ${admin && 'text-admin'} flex`}>

            <input className={`span span-${theme} flex`} type="text" placeholder="nazwa subMenu..."
              value={target.txt} onChange={ (e)=> setTarget({...target, txt:e.target.value}) } />

            <EditDeletePannel props={{ target, theme, act }} />
          
          </div>
        </section>

        <AddTagPannel theme={theme} />

      </div>

    }
    </section>
  )
  // {
  //   tag:"theme",
  //   txt:string
  // }
}