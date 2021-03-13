import React, { useState } from 'react'
import './TagTable.scss'

import { tableActions } from './tableActions'

import { TableRender } from './TableRender'
import { TableEdit } from './TableEdit'


const TagTable = ({ item, theme, index, act, admin })=>{

  const [target, setTarget] = useState(item)
  
  // console.log('TagTable', target)

  let tableFn = ({type, payload})=> tableActions(type, payload, target, setTarget)

  return(
    <div className={`tagTable tagTable-${theme} ${admin && 'tagTable-admin'}`} >
    {
      !target.editing
      ? <TableRender props={{ target, theme, act, admin }} />
      : <TableEdit props={{ target, theme, tableFn, act }} />
    }
    </div>
  )
//  {
//    tag:"table",
//    inn: int,
//    width: [int,int,...],
//    align: [string,string,...],
//    content: [
//      [th,th,...],
//      [td,td,...],
//      [td,td,...]
//    ],
//    editing: bool
//  }
}

export default TagTable