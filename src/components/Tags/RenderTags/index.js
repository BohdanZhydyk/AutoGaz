import React from 'react'

import { TagTitle } from './TagTitle'
import { TagP } from './TagP'
import { TagImg } from './TagImg'
import { TagUl } from './TagUl'
import { TagTheme } from './TagTheme'
import { TagIframe } from './TagIframe'
import { TagTable } from './TagTable'
import { TagWrapper } from './TagWrapper'
import { TagSlider } from './TagSlider'
import { TagGallery } from './TagGallery'


const RenderTags = ({item, index, theme, name, act})=>{

  const obj = {item:item, index:index, theme:theme}
  const key = name + index

  switch(item.tag){
    case "h1":
      return <TagTitle obj={obj} act={act} key={`TagTitle${key}`}/>
    case "p":
      return <TagP obj={obj} act={act} key={`Paragraph${key}`}/>
    case "img":
      return <TagImg obj={obj} act={act} key={`Image${key}`}/>
    case "ul":
      return <TagUl obj={obj} act={act} key={`Ul${key}`}/>
    case "theme":
      return <TagTheme obj={obj} act={act} key={`Theme${key}`} />
    case "iframe":
      return <TagIframe obj={obj} act={act} key={`Iframe${key}`} />
    case "table":
      return <TagTable obj={obj} act={act} key={`Table${key}`}/>
    case "wrapper":
      return <TagWrapper obj={obj} act={act} key={`Wrapper${key}`}/>
    case "slider":
      return <TagSlider obj={obj} act={act} key={`Slider${key}`}/>
    case "gallery":
      return <TagGallery obj={obj} act={act} key={`Gallery${key}`}/>
    default: return <></>
  }
}

export default RenderTags
