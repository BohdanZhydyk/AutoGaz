import React from 'react'

import { PlusLineBtn } from './PlusLineBtn'


export const Th = ({ props:{ item, index, nr, width, theme, editing, len, tableFn } })=>{

  let CHANGE_iTEM_VALUE = (tableLine, tableColumn, value)=>
    tableFn({ type:"CHANGE_iTEM_VALUE", payload:{ tableLine, tableColumn, value } })

  return(
    <>
    <th className={`th th-${theme} item flex`} style={{width:width[index]+"%"}} >

      {

        editing

        ? <input type="text" value={item.toUpperCase()} placeholder="wpisz dane..." style={{textAlign:"center"}}
            onChange={ (e)=> CHANGE_iTEM_VALUE(nr, index, e.target.value) } />

        : <span>{item.toUpperCase()}</span>

      }

    </th>

    <PlusLineBtn props={{ index, nr, theme, editing, len, tableFn }} />

    </>
  )
}