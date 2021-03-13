import React from 'react'


export const ParagraphRender = ({ props:{ target, admin, act } })=>{

  let EDIT_TAG = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn:target.inn} })

  return(
    <p className="content" onClick={ ()=> admin && EDIT_TAG() } >

      { target.txt }

      {
        target.a &&
        <a href={target.href} target="_blank" rel="noreferrer">
          {` ${target.a}`}
        </a>
      }

    </p>
  )
}