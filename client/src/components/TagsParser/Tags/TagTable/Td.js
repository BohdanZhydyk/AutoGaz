import React from 'react'

import { PlusLineBtn } from './PlusLineBtn'


export const Td = ({ props: { item, index, nr, width, align, theme, lineColor, editing, len, tableFn } }) => {

  let classTd = `td td-${theme} item flex ${align[index]}`
  let classColor = `${lineColor ? `colorOne colorOne-${theme}` : `colorTwo colorTwo-${theme}`}`

  let CHANGE_iTEM_VALUE = (tableLine, tableColumn, value) =>
    tableFn({ type: "CHANGE_iTEM_VALUE", payload: { tableLine, tableColumn, value } })

  return (
    <>
      <td className={classTd + classColor} style={{ width: width[index] + "%" }} >
        {
          editing
          ? <input type="text" value={item} placeholder="wpisz dane..." style={{ textAlign: align[index] }}
            onChange={(e) => CHANGE_iTEM_VALUE(nr, index, e.target.value)} />
          : <span>{item}</span>
        }
      </td>

      <PlusLineBtn props={{ index, nr, theme, editing, len, tableFn }} />

    </>
  )
}