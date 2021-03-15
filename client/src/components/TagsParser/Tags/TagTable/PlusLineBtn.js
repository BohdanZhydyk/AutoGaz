import React from 'react'


export const PlusLineBtn = ({ props:{ index, nr, theme, editing, len, tableFn } })=>{

  let ADD_NEW_LINE = (nr)=> tableFn({ type:"ADD_NEW_LINE", payload:{ nr } })

  return(
    <>
    {
      editing &&
      (len === index + 1) &&
        <th className={`plus plus-${theme}`} onClick={ ()=> ADD_NEW_LINE(nr) }> + </th>
    }
    </>
  )
}