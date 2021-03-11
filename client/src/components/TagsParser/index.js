import React from 'react'
import './TagsParser.scss'

import { AddTagPannel } from './AddTagPannel'

import { TagMenu } from './Tags/TagMenu'
import { TagTheme } from './Tags/TagTheme'
import { TagH1 } from './Tags/TagH1'
import { TagP } from './Tags/TagP'
import { TagImg } from './Tags/TagImg'
import { TagUl } from './Tags/TagUl'
import { TagIframe } from './Tags/TagIframe'
import { TagTable } from './Tags/TagTable'
// import { TagWrapper } from './Tags/TagWrapper'
import { TagSlider } from './Tags/TagSlider'
import { TagGallery } from './Tags/TagGallery'


const TagsParser = ({array, index, theme, act, admin})=>{
  return(
    <>
    {
      array.map( (item, nr)=>{

        switch(item.tag){
          case "menu":
            return(
              <>
                <TagMenu item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          case "theme":
            return(
              <>
                <TagTheme item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          case "h1":
            return(
              <>
                <TagH1 item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          case "p":
            return(
              <>
                <TagP item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          case "img":
            return(
              <>
                <TagImg item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          case "ul":
            return(
              <>
                <TagUl item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          case "iframe":
            return(
              <>
                <TagIframe item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          case "table":
            return(
              <>
                <TagTable item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          // case "wrapper": return <TagWrapper item={item} theme={theme} index={index} act={act} admin={admin} />
          case "slider":
            return(
              <>
                <TagSlider item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          case "gallery":
            return(
              <>
                <TagGallery item={item} theme={theme} index={index} act={act} admin={admin} />
                { admin && <AddTagPannel theme={theme} /> }
              </>
            )
          default: return <></>
        }

      })
    }
    </>
  )
}

export default TagsParser