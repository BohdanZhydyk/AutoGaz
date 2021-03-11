import React from 'react'

import { AddTagPannel } from './../TagsParser/AddTagPannel'
import TagsParser from './../TagsParser'


export const HeaderPannel = ({element, index, theme, act, admin})=>{
  return(
    <div className="headerPannel flex column">
      <div className={`headerContent ${admin && 'headerContent-admin'}`}>
        { admin && <AddTagPannel theme={theme} /> }
        { element.header && <TagsParser array={element.header} index={index} theme={theme} act={act} admin={admin} /> }
      </div>
    </div>
  )
}