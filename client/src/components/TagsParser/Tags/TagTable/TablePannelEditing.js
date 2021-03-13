import React from 'react'

import { ThEditing } from './ThEditing'
import { TdEditing } from './TdEditing'


export const TablePannelEditing = ({ props:{ target, theme, tableFn } })=>{

  let align = target.align
  let width = target.width
  let content = target.content
  let lineColor = true

  let ADD_NEW_LINE = (nr)=> tableFn({ type:"ADD_NEW_LINE", payload:{ nr } })

  return(
    <table className="table">
    {
      content.map( (line, nr)=>{

        lineColor = !lineColor
        
        return(
          <tr className="tr flex">

            {
              line.map( (item, index)=>
                nr === 0
                ? <ThEditing props={{ item, index, nr, width, theme, tableFn }} />
                : <TdEditing props={{ item, index, nr, width, align, theme, lineColor, tableFn }} />
                
              )
            }

            <button onClick={ ()=> ADD_NEW_LINE(nr) }> + </button>

          </tr>
        )
      })
    }
    </table>
  )
}