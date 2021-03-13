import React from 'react'
import './TagsParser.scss'

import { TagMenu } from './Tags/TagMenu'
import { TagTheme } from './Tags/TagTheme'
import { TagHeading } from './Tags/TagHeading'
import { TagP } from './Tags/TagP'
import { TagImg } from './Tags/TagImg'
import { TagUl } from './Tags/TagUl'
import { TagIframe } from './Tags/TagIframe'
import TagTable from './Tags/TagTable'
import { TagWrapper } from './Tags/TagWrapper'
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
              <div className="tag" key={`Menu${index.inn}`}>
                <TagMenu item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "theme":
            return(
              <div className="tag" key={`Theme${index.inn}`}>
                <TagTheme item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "heading":
            return(
              <div className="tag" key={`Heading${index.inn}`}>
                <TagHeading item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "p":
            return(
              <div className="tag" key={`Paragraph${index.inn}`}>
                <TagP item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "img":
            return(
              <div className="tag" key={`Image${index.inn}`}>
                <TagImg item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "ul":
            return(
              <div className="tag" key={`Ul${index.inn}`}>
                <TagUl item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "iframe":
            return(
              <div className="tag" key={`Iframe${index.inn}`}>
                <TagIframe item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "table":
            return(
              <div className="tag" key={`Table${index.inn}`}>
                <TagTable item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "wrapper":
            return(
              <div className="tag" key={`Wrapper${index.inn}`}>
                <TagWrapper item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "slider":
            return(
              <div className="tag" key={`Slider${index.inn}`}>
                <TagSlider item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          case "gallery":
            return(
              <div className="tag" key={`Gallery${index.inn}`}>
                <TagGallery item={item} theme={theme} index={index} act={act} admin={admin} />
              </div>
            )
          default: return <></>
        }

      })
    }
    </>
  )
}

export default TagsParser