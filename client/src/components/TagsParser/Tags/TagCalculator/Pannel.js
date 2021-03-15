import React from 'react'

import { Ranges } from './Ranges'
import { ResultsPannel } from './ResultsPannel'


export const Pannel = ({ props: { sets, ranges, editing, calcFn } }) => {

  let set = sets.filter((item) => item.active)[0].set

  return (
    <div className="pannel flex">

      <Ranges props={{ set, ranges, editing, calcFn }} />

      <ResultsPannel props={{ set, ranges, editing }} />

    </div>
  )
}