import React from 'react'

import { TableLine } from './TableLine'


export const Table = ({table})=>{

  let color = true

  return(
    <div className="table">
    {
      table.map( (line, index)=>{
        color = !color
        return <TableLine line={line} color={color} key={`lineleft${index}`} />
      })
    }
    </div>
  )
}
