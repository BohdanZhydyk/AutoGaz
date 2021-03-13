import React from 'react'

import { ThRender } from './ThRender'
import { TdRender } from './TdRender'


export const TableRender = ({ props:{ target, theme, act, admin } })=>{

  let lineColor = true
  let width = target.width
  let align = target.align
  let content = target.content
  let inn = target.inn

  let EDIT_TAG = ()=> act({ addr:"admin", type:"EDIT_TAG", payload:{inn} })

  return(
    <section className="content" onClick={ ()=> admin && EDIT_TAG() } >

      <table className="table">
      {
        content.map( (line, nr)=>{
          
          lineColor = !lineColor

          return(
            <tr className={`tr line flex`} key={`Tr${nr}`}>
            {
              line.map( (item, index)=>
                nr === 0
                ? <ThRender props={{ item, index, width, theme }} key={`ThRender${nr+index}`} />
                : <TdRender props={{ item, index, width, align, lineColor, theme }} key={`TdRender${nr+index}`} />
              )
            }
            </tr>
          )
        })
      }
      </table>

    </section>
  )
}