import React from 'react'


export const TdEditing = ({ props:{ item, index, nr, width, align, theme, lineColor, tableFn } })=>{

  let CHANGE_iTEM_VALUE = (tableLine, tableColumn, value)=>
    tableFn({ type:"CHANGE_iTEM_VALUE", payload:{ tableLine, tableColumn, value } })

  let classes = { td:`td td-${theme} item flex ${align[index]} ${lineColor ? `colorOne colorOne-${theme}` : `colorTwo colorTwo-${theme}`}` }
  let styles = {
    td:{width:width[index]+"%"},
    input:{textAlign:align[index]}
  }

  return(
    <td className={classes.td} style={styles.td} >

      <input type="text" value={item} placeholder="wpisz dane..." style={styles.input}
        onChange={ (e)=> CHANGE_iTEM_VALUE(nr, index, e.target.value) } />

    </td>
  )
}