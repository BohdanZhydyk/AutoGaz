import React, { useState } from 'react'
import './TagTable.scss'

import { AddTagPannel } from './../../AddTagPannel'
import { ColumnEditPannel } from './ColumnEditPannel'
import { EditDeletePannel } from './../../EditDeletePannel'

import { tableActions } from './tableActions'

import { Th } from './Th'
import { Td } from './Td'


const TagTable = ({ props:{ item, index, theme, act, admin } })=>{

  const [target, setTarget] = useState(item)

  let lineColor = true
  let width = target.width
  let align = target.align
  let content = target.content
  let inn = target.inn
  let editing = target.editing
  
  // console.log('TagTable', target)

  let tableFn = ({type, payload})=> tableActions(type, payload, target, setTarget)

  let EDIT_TAG = ()=> admin && act({ addr:"admin", type:"EDIT_TAG", payload:{inn} })
  let ADD_NEW_LINE = (nr)=> tableFn({ type:"ADD_NEW_LINE", payload:{ nr } })

  return(
    <section className={`tagTable tagTable-${theme} ${admin && 'tagTable-admin'}`} >

    { editing && <AddTagPannel theme={theme} /> }

    <div className="content flex" onClick={ ()=> !editing && EDIT_TAG() } >

      <div className="tablePannel">

      { editing && <ColumnEditPannel props={{ width, align, tableFn }} /> }

      <table className="table">
      <tbody className="body">
      {
        content.map( (line, nr)=>{
          
          let len = line.length
          lineColor = !lineColor

          return(
            <tr className="tr flex" key={`Tr${nr}`}>

              {
                line.map( (item, index)=>

                  nr === 0

                  ? <Th key={`Th${nr+index}`}
                      props={{ item, index, nr, width, theme, editing, len, tableFn }} />

                  : <Td key={`Td${nr+index}`}
                      props={{ item, index, nr, width, align, theme, lineColor, editing, len, tableFn }} />
                )
              }

            </tr>
          )
        })
      }
      </tbody>
      </table>
      
      </div>
      
      { editing && <EditDeletePannel props={{ target, theme, act }} /> }

    </div>

    { editing && <AddTagPannel theme={theme} /> }

    </section>
  )
//  {
//    tag:"table",
//    inn: int,
//    width: [int,int,...],
//    align: [string,string,...],
//    content: [
//      [th,th,...],
//      [td,td,...],
//      [td,td,...]
//    ],
//    editing: bool
//  }
}

export default TagTable