import React from 'react'

import { AddTagPannel } from './../../AddTagPannel'
import { EditDeletePannel } from './../../EditDeletePannel'

import { InputTextarea } from './InputTextarea'
import { InputA } from './InputA'
import { InputHref } from './InputHref'


export const ParagraphEdit = ({ props:{ target, theme, paragraphFn, act } })=>{
  return(
    <div className="content flex column">
      <AddTagPannel theme={theme} />

      <div className="flex">

        <InputTextarea props={{ target, paragraphFn }} />

        <EditDeletePannel props={{ target, theme, act }} />

      </div>

      <div className="flex">

        <InputA props={{ target, paragraphFn }} />

        <InputHref props={{ target, paragraphFn }} />
        
      </div>
      
      <AddTagPannel theme={theme} />
    </div>
  )
}