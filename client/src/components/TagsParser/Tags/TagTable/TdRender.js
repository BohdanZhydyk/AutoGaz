import React from 'react'


export const TdRender = ({ props:{ item, index, width, align, lineColor, theme } })=>{

  let classes = {
    td:`td td-${theme} item flex ${align[index]} ${lineColor ? `colorOne colorOne-${theme}` : `colorTwo colorTwo-${theme}`}`
  }
  let styles = { td:{width: width[index]+"vw"} }

  return(
    <td className={classes.td} style={styles.td} >
      <span>{item}</span>
    </td>
  )
}