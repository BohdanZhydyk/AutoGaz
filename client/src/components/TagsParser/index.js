import React from 'react'
import './TagsParser.scss'

import { TagMenu } from './Tags/TagMenu'
import { TagTheme } from './Tags/TagTheme'
import TagHeading from './Tags/TagHeading'
import TagP from './Tags/TagP'
import { TagImg } from './Tags/TagImg'
import { TagUl } from './Tags/TagUl'
import { TagIframe } from './Tags/TagIframe'
import TagTable from './Tags/TagTable'
import { TagWrapper } from './Tags/TagWrapper'
import { TagSlider } from './Tags/TagSlider'
import { TagGallery } from './Tags/TagGallery'
import TagCalculator from './Tags/TagCalculator'


const TagsParser = ({array, nr, theme, act, admin})=>{
  return(
    <>
    {
      array.map( (item, index)=>{

        switch(item.tag){
          // case "menu":
          //   return(
          //     <div className="tag" key={item.tag.toUpperCase()+item.inn} >
          //       <TagMenu props={{ item, index, theme, act, admin }} />
          //     </div>
          //   )
          case "theme":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagTheme props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "heading":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagHeading props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "p":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagP props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "img":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagImg props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "ul":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagUl props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "iframe":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagIframe props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "table":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagTable props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "wrapper":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagWrapper props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "slider":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagSlider props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "gallery":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagGallery props={{ item, index, theme, act, admin }} />
              </div>
            )
          case "calculator":
            return(
              <div className="tag" key={item.tag.toUpperCase()+item.inn} >
                <TagCalculator props={{ item, index, theme, act, admin }} />
              </div>
            )
          default: return
        }

      })
    }
    </>
  )
}

export default TagsParser