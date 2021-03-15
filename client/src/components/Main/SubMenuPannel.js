import React from 'react'

import TagsParser from './../TagsParser'
import { AddTagPannel } from './../TagsParser/AddTagPannel'


export const SubMenuPannel = ({ props:{ el, nr, theme="light", act, admin } })=>{
  return(
    <div className={`subMenuPannel subMenuPannel-${theme} flex column`} >

      <div className={`subMenuContent ${admin && 'subMenuContent-admin'}`}>

        <TagsParser array={[el]} nr={nr} theme={theme} act={act} admin={admin} />

        { el.content && <TagsParser array={el.content} nr={nr} theme={theme} act={act} admin={admin} /> }

      </div>

    </div>
  )
}