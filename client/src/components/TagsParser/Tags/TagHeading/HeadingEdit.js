import React from 'react'

import { AddTagPannel } from './../../AddTagPannel'
import { EditDeletePannel } from './../../EditDeletePannel'


export const HeadingEdit = ({ props:{ target, theme, headingFn, act } })=>{

  let CHANGE_INPUT = (value)=> headingFn({ type:"CHANGE_INPUT", payload:value })

  return(
    <div className="content flex column" >
      <AddTagPannel theme={theme} />

      <div className="flex">

        <input type="text" value={target.txt} placeholder={`text hedera...`}
            onChange={ (e)=> CHANGE_INPUT(e.target.value) } />

        <EditDeletePannel props={{ target, theme, act }} />
        
      </div>
      
      <AddTagPannel theme={theme} />
    </div>
  )
}