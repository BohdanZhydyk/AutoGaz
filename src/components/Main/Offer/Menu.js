import React from 'react'

import { Section } from './Section'


export const Menu = ({menu})=>{
  return(
    <>
      <div className="theme flex">{menu.ul}</div>
      {
        menu.li.map( (li, index)=> <Section li={li} /> )
      }
    </>
  )
}