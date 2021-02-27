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


const RenderTags = ({item, index, theme, name})=>{

  const obj = {item:item, index:index, theme:theme}
  const key = name + index

  switch(item.tag){
    case "h1":
      return <TagTitle obj={obj} key={`TagTitle${key}`}/>
    case "p":
      return <TagP obj={obj} key={`Paragraph${key}`}/>
    case "img":
      return <TagImg obj={obj} key={`Image${key}`}/>
    case "ul":
      return <TagUl obj={obj} key={`Ul${key}`}/>
    case "theme":
      return <TagTheme obj={obj} key={`Theme${key}`} />
    case "iframe":
      return <TagIframe obj={obj} key={`Iframe${key}`} />
    case "table":
      return <TagTable obj={obj} key={`Table${key}`}/>
    case "wrapper":
      return <TagWrapper obj={obj} key={`Wrapper${key}`}/>
    case "slider":
      return <TagSlider obj={obj} key={`Slider${key}`}/>
    default: return <></>
  }
}

export default RenderTags
