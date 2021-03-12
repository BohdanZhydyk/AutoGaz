import React from 'react'

import TagsParser from './../TagsParser'


export const SubMenuPannel = ({el, nr, theme, act, admin})=>{
  return(
    <div className={`subMenuPannel subMenuPannel-${theme} flex column`} >
      <div className={`subMenuContent ${admin && 'subMenuContent-admin'}`}>
        <TagsParser array={[{tag:el.tag, inn:el.inn, to:el.to, txt:el.txt}]} index={nr} theme={theme} act={act} admin={admin} />
        { el.content && <TagsParser array={el.content} index={nr} theme={theme} act={act} admin={admin} /> }
      </div>
    </div>
  )
}