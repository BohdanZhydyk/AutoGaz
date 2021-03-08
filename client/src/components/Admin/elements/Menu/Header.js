import React from 'react'

import { SubMenu } from './SubMenu'
import TagParser from './../TagParser'


export const Header = ({object, adm})=>{
  return(
    <div className="elementMenuHeader">
      <div>header</div>
      {
        object.header
        ? <TagParser object={object.header} adm={adm} />
        : <button>add header</button>
      }
      { object.subMenu && <SubMenu object={object.subMenu} adm={adm} /> }
    </div>
  )
}