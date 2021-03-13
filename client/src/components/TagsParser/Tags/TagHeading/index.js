import React, { useState } from 'react'
import './TagHeading.scss'

import { HeadingRender } from './HeadingRender'
import { HeadingEdit } from './HeadingEdit'


const TagHeading = ({ props:{ item, index, theme, act, admin } })=>{

  const [target, setTarget] = useState(item)

  // console.log('TagP', target)

  const headingFn = ({type, payload})=>{
    switch(type){
      case "CHANGE_INPUT": setTarget({...target, txt:payload}); break;
      default: break
    }
  }

  return(
    <h3 className={`tagHeading tagHeading-${theme} ${admin && 'tagHeading-admin'} flex`} >
    {
      !target.editing
      ? <HeadingRender props={{ target, admin, act }} />
      : <HeadingEdit props={{ target, theme, headingFn, act }} />
    }
    </h3>
  )
// {
//   tag: "heading",
//   inn: int,
//   txt: string,
//   editing: bool
// }
}

export default TagHeading