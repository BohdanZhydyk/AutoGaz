import React from 'react'

import { AddTagPannel } from './../../AddTagPannel'
import { EditDeletePannel } from './../../EditDeletePannel'

import { ColumnEditPannel } from './ColumnEditPannel'
import { TablePannelEditing } from './TablePannelEditing'


export const TableEdit = ({ props:{ target, theme, tableFn, act } })=>{
  return(

    <section className="content flex column">
      <AddTagPannel theme={theme} />

      <ColumnEditPannel props={{ target, tableFn }} />

      <div className="flex">

        <TablePannelEditing props={{ target, theme, tableFn }} />

        <EditDeletePannel props={{ target, theme, act }} />
      </div>

      <AddTagPannel theme={theme} />
    </section>

  )
}