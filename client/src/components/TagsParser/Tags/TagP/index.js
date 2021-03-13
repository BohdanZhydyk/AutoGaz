import React, { useState } from 'react'
import './TagP.scss'

import { ParagraphRender } from './ParagraphRender'
import { ParagraphEdit } from './ParagraphEdit'


const TagP = ({ props:{ item, index, theme, act, admin } })=>{

  const [target, setTarget] = useState(item)

  // console.log('TagP', target)

  const paragraphFn = ({type, payload})=>{
    switch(type){
      case "CHANGE_TEXTAREA":   setTarget({...target, txt:payload});  break;
      case "CHANGE_A":          setTarget({...target, a:payload});    break
      case "CHANGE_HREF":       setTarget({...target, href:payload}); break
      default: break
    }
  }

  return(
    <section className={`tagP tagP-${theme} ${admin && 'tagP-admin'}`} >
    {
      !target.editing
      ? <ParagraphRender props={{ target, admin, act }} />
      : <ParagraphEdit props={{ target, theme, paragraphFn, act }}/>
    }
    </section>
  )
// {
//   tag: "p",
//   inn: int,
//   txt: string,
//   a: string,
//   href: string,
//   editing: bool
// }
}

export default TagP