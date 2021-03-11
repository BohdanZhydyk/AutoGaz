import React from 'react'

import { AddTagPannel } from './../TagsParser/AddTagPannel'
import TagsParser from './../TagsParser'


export const Cookie = ({state, theme, act, admin})=>{
  return(
    <div className="cookie">
    {
      state.map( (element, index)=>{
        if(element.tag === "cookie"){
          return(
            <div className={`subMenuPannel subMenuPannel-${theme} flex column`} >
              <div className={`subMenuContent ${admin && 'subMenuContent-admin'}`}>
                { admin && <AddTagPannel theme={theme} /> }
                { element.object && <TagsParser array={element.object} index={index} theme={theme} act={act} admin={admin} /> }
              </div>
            </div>
          )
        }
      })
    }
    </div>
  )
}