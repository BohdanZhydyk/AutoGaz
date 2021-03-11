import React from 'react'

import { AddTagPannel } from './../TagsParser/AddTagPannel'
import TagsParser from './../TagsParser'


export const SubMenuPannel = ({el, nr, theme, act, admin})=>{
  return(
    <div className={`subMenuPannel subMenuPannel-${theme} flex column`} >
      <div className={`subMenuContent ${admin && 'subMenuContent-admin'}`}>
        { admin && <AddTagPannel theme={theme} /> }
        { el.content && <TagsParser array={el.content} index={nr} theme={theme} act={act} admin={admin} /> }
      </div>
    </div>
  )
}