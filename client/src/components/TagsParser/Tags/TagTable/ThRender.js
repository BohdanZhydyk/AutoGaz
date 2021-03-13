import React from 'react'


export const ThRender = ({ props:{ item, index, width, theme } })=>{

  let classes = { th:`th th-${theme} item flex` }
  let styles = { th:{width: width[index]+"vw"} }

  return(
    <th className={classes.th} style={styles.th} >
      <span>{item.toUpperCase()}</span>
    </th>
  )
}