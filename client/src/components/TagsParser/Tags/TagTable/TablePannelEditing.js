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
    <table className="table"><tbody className="body">
    {
      content.map( (line, nr)=>{

        lineColor = !lineColor
        
        return(
          <tr className="tr flex" key={`trEdit${nr}`}>

            {
              line.map( (item, index)=>
                nr === 0
                ? <ThEditing props={{ item, index, nr, width, theme, tableFn }} key={`thEdit${nr+index}`} />
                : <TdEditing props={{ item, index, nr, width, align, theme, lineColor, tableFn }} key={`tdEdit${nr+index}`} />
                
              )
            }

            <button onClick={ ()=> ADD_NEW_LINE(nr) }> + </button>

          </tr>
        )
      })
    }
    </tbody></table>
  )
}