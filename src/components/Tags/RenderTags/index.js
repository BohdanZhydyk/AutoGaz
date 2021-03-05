import React from 'react'

import { TagMenu } from './TagMenu'
import { TagH1 } from './TagH1'
import { TagP } from './TagP'
import { TagImg } from './TagImg'
import { TagUl } from './TagUl'
import { TagTheme } from './TagTheme'
import { TagIframe } from './TagIframe'
import { TagTable } from './TagTable'
import { TagWrapper } from './TagWrapper'
import { TagSlider } from './TagSlider'
import { TagGallery } from './TagGallery'


const RenderTags = ({item, theme, index, act})=>{

  switch(item.tag){
    case "menu": return <TagMenu item={item} theme={theme} index={index} act={act} />
    case "h1": return <TagH1 item={item} theme={theme} index={index} act={act} />
    case "p": return <TagP item={item} theme={theme} index={index} act={act} />
    case "theme": return <TagTheme item={item} theme={theme} index={index} act={act} />
    case "img": return <TagImg item={item} theme={theme} index={index} act={act} />
    case "ul": return <TagUl item={item} theme={theme} index={index} act={act} />
    case "iframe": return <TagIframe item={item} theme={theme} index={index} act={act} />
    case "table": return <TagTable item={item} theme={theme} index={index} act={act} />
    case "wrapper": return <TagWrapper item={item} theme={theme} index={index} act={act} />
    case "slider": return <TagSlider item={item} theme={theme} index={index} act={act} />
    case "gallery": return <TagGallery item={item} theme={theme} index={index} act={act} />
    default: return <></>
  }

}

export default RenderTags
