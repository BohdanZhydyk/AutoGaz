import './Tags.scss'

import { TagTheme } from './TagTheme'
import { TagImage } from './TagImage'
import { TagParagraph } from './TagParagraph'
import { TagUl } from './TagUl'
import { TagSimulator } from './TagSimulator'
import { TagTable } from './TagTable'


export const tagsFunction = (item, index, name)=>{
  switch(item.tag){
    case "p":
      return <TagParagraph value={item.value} key={`${name}Paragraph${index}`}/>
    case "img":
      return <TagImage value={item.value} key={`${name}Image${index}`}/>
    case "theme":
      return <TagTheme value={item.value} key={`${name}Theme${index}`} />
    case "ul":
      return <TagUl value={item.value} key={`${name}Ul${index}`}/>
    case "simulator":
      return <TagSimulator value={item.value} key={`${name}Simulator${index}`}/>
    case "table":
      return <TagTable value={item.value} key={`${name}Table${index}`}/>
    default: return <></>
  }
}