import React from 'react'


export const ThEditing = ({ props:{ item, index, nr, width, theme, tableFn } })=>{

  let CHANGE_iTEM_VALUE = (tableLine, tableColumn, value)=>
    tableFn({ type:"CHANGE_iTEM_VALUE", payload:{ tableLine, tableColumn, value } })

  let classes = { th:`th th-${theme} item flex` }
  let styles = {
    th:{width:width[index]+"%"},
    input:{textAlign:"center"}
  }

  return(
    <th className={classes.th} style={styles.th} >

      <input type="text" value={item.toUpperCase()} placeholder="wpisz dane..." style={styles.input}
        onChange={ (e)=> CHANGE_iTEM_VALUE(nr, index, e.target.value) } />

    </th>
  )
}